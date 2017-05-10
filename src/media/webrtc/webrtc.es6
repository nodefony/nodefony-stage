module.exports =  function(stage){

	'use strict';


	// FIXME CALLBACK SDP PARSER
	var parseSdp = function(description){
		var sdpLines = description.sdp.split('\r\n');
		var newline = "";
		// Search for m line.
		for (var i = 0; i < sdpLines.length; i++) {
			var line = sdpLines[i];
			switch (description.type ){
				case "offer":
					/*if (line.search('a=crypto') !== -1) {
						console.log("PARSE SDP DELETE CRYPTO ");
						continue ;
					}*/
					/*if (line.search('a=setup:actpass') !== -1) {
						console.log("PARSE SDP REPLACE setup :  actpass by active  ");
						line = line.replace("a=setup:actpass", "a=setup:active")
					}*/
				break;
				case "answer":
					/*if (line.search('a=crypto') !== -1) {
						console.log("PARSE SDP DELETE CRYPTO ");
						continue ;
					}*/
					/*if (line.search('a=setup:actpass') !== -1) {
						console.log("PARSE SDP REPLACE setup :  actpass by active  ");
						line = line.replace("a=setup:actpass", "a=setup:active")
					}*/
				break;
			}
			if ( i === sdpLines.length-1 ){
				newline+=line;
			}else{
				newline+=line+"\r\n";
			}
		}
		description.sdp = newline ;
		return description;
	};


	/*
 	 *
 	 *	CLASS USER
 	 *
 	 */
	var userSettings = {
		constraints	: { mandatory: { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } },
		//constraintsOffer: stage.browser.Gecko ? {'mandatory': {'MozDontOfferDataChannel':true}} : null
		displayName	: ""
	};

	var User = class User  {

		constructor(userName, settings){
			this.name = userName ;

			this.settings = stage.extend({}, userSettings, settings );

			this.displayName = this.settings.displayName || userName ;

			this.audio = this.settings.constraints.mandatory.OfferToReceiveAudio ;
			this.video = this.settings.constraints.mandatory.OfferToReceiveVideo ;
			this.mediaStream = null ;
			this.description = "" ;

		}

		createMediaStream (succesCallback, errorMedia){
			this.mediaStream = new stage.media.mediaStream(null, {
				audio: this.audio,
				video:this.video,
				onSucces:succesCallback,
				onError:errorMedia
			});
			return this.mediaStream ;
		}

		setDescription (desc){
			this.description = desc ;
		}
	};

	/*
 	 *
 	 *	CLASS TRANSACTION WEBRTC
 	 *
 	 */
	var Transaction = class Transaction extends stage.Service {
		constructor(webrtc, from, to, dialog, settings){
			super("WEBRTC TRANSACTION", webrtc.container, stage.notificationsCenter.create(settings || {}) )
			this.webrtc = webrtc ;
			//this.notificationsCenter = stage.notificationsCenter.create(settings || {}, this);
			this.dialog = dialog || null ;
			this.error = null ;
			if ( this.dialog ){
				this.callId = this.dialog.callId;
			}
			this.protocol =  webrtc.protocol;
			this.from = from ;
			try {
				if (to instanceof User ){
					this.to = to;
				}else{
					this.to = new User(to, settings) ;
				}
			}catch(e){
				throw e ;
			}
			this.asyncCandidates = this.webrtc.settings.asyncCandidates ;

			this.logger("CREATE TRANSATION WEBRTC", "DEBUG");
			this.RTCPeerConnection = this.createPeerConnection() ;
			this.RTCPeerConnection.addStream(this.from.stream)

			// MANAGE DTMF
			this.dtmfSender= null ;
			if ( this.webrtc.settings.dtmf ){
				try {
					this.initDtmfSender( this.from.stream );
					this.webrtc.listen(this, "onKeyPress", this.sendDtmf ) ;
					// FIXME TRY TO RECEIVE DTMF RTP-EVENT
					/*this.webrtc.listen(this, "onRemoteStream",function(event, mediaStream, transaction){
						this.logger( "DTMF setRemoteStream", "DEBUG")
						this.initDtmfReceiver( this.from.stream );
					});*/
				}catch(e){
					this.webrtc.logger(e, "ERROR") ;
					throw e ;
				}
			}

			// MANAGE CANDIDATES
			this.candidates = [];
			this.listen(this, "onIcecandidate" , function(transaction, candidates, peerConnection){
				//console.log(" onIcecandidate : " + peerConnection.localDescription.type )
				if ( this.asyncCandidates && this.candidates.length){
					//console.log( message.dailog)
					var to = this.dialog.to.replace("<sip:", "").replace(">","") ;
					this.logger("CANDIDATE TO" + to, "DEBUG");
					this.logger("CANDIDATE TO" + this.to.name, "DEBUG");
					this.dialog.invite(to, JSON.stringify(this.candidates), "ice/candidate")
				}else{
					if ( peerConnection.localDescription.type == "offer" ){
						this.sessionDescription = parseSdp.call(this, peerConnection.localDescription ) ;
						if ( this.dialog ){
							var to = this.dialog.to.replace("<sip:", "").replace(">","") ;
							this.logger("CANDIDATE TO" + to, "DEBUG");
							this.logger("CANDIDATE TO" + this.to.name, "DEBUG");
							this.dialog.invite(to, this.sessionDescription);
						}else{
							this.dialog = this.webrtc.protocol.invite(this.to.name, this.sessionDescription);
							this.callId = this.dialog.callId ;
							this.webrtc.fire("onInvite", this, this.to, this.sessionDescription );
						}
					}
					if (peerConnection.localDescription.type == "answer" ){
						this.sessionDescription = peerConnection.localDescription ;
						if ( this.sessionDescription && ! ( this.error ) )
						this.fire("onCreateAnwser", this.to, this.sessionDescription, this, this.dialog);
					}

				}
			})

			this.listen(this, "onCreateAnwser", function(to, sessionDescription, webrtcTransaction, diag){
				var response = this.dialog.currentTransaction.createResponse( 200, "OK", this.sessionDescription.sdp, "application/sdp"  );
				response.send();
			});
		}

		createPeerConnection (){
			try {
				// CREATE PeerConnection
				this.RTCPeerConnection = new RTCPeerConnection( this.webrtc.iceServers , this.webrtc.settings.optional );

				// MANAGE EVENT CANDIDATES
				this.RTCPeerConnection.onicecandidate =  (event)  => {
					// FIX firefox fire many time onicecandidate  iceGatheringState === complete
					var old = this.iceGatheringState ;
					if ( event.target ){
						this.iceGatheringState = event.target.iceGatheringState || this.RTCPeerConnection.iceGatheringState ;
					}else{
						this.iceGatheringState = this.RTCPeerConnection.iceGatheringState ;
					}
					var type = this.RTCPeerConnection.localDescription.type ;
					//console.log( this.iceGatheringState )
					//console.log( type )
					if (type === "offer"  && this.iceGatheringState === 'complete'  && old !== "complete")  {
						//console.log("PASSS CANDIDATE")
						this.fire("onIcecandidate", this, this.candidates ,this.RTCPeerConnection );
    					} else if (event && event.candidate == null) {
						// candidates null !!!
    					} else {
						this.logger("WEBRTC : ADD CANDIDATE", "DEBUG");
						if (event.candidate){
							this.candidates.push(event.candidate);
						}
						if (type === "answer"){
							this.fire("onIcecandidate", this, this.candidates ,this.RTCPeerConnection );
							this.RTCPeerConnection.onicecandidate = null ;
						}
    					}
				};

				// MANAGE STREAM
				this.RTCPeerConnection.onaddstream = (event) => {
					//console.log(event)
					this.setRemoteStream( event)
					this.logger("WEBRTC : ADD STREAM ", "DEBUG");
				};
				return this.RTCPeerConnection;
			}catch (e){
				this.logger(e, "ERROR");
				this.webrtc.fire("onError", this, e);
			}
		}

		// FIXME TRY TO RECEIVE DTMF RTP-EVENT
		/*initDtmfReceiver (mediaStream){
			console.log(this.RTCPeerConnection)
			if ( ! this.RTCPeerConnection.createDTMFSender ) {
				throw new Error(" RTCPeerConnection method createDTMFSender() !!!! which is not support by this browser");
			}
  			if (mediaStream !== null) {
				try {
					var remoteAudioTrack = mediaStream.getAudioTracks()[0];
					var dtmfSender = this.RTCPeerConnection.createDTMFSender(remoteAudioTrack);
					dtmfSender.ontonechange = (tone) => {
						this.logger("dtmfOnToneChange", "DEBUG") ;
						this.webrtc.fire("dtmfOnToneChange", tone , this);
					};
				}catch(e){
					throw e ;
				}

  			} else {
				throw new Error( 'No local stream to create DTMF Sender', 500)
  			}
		}*/

		initDtmfSender (mediaStream) {

			switch ( this.webrtc.settings.dtmf ){
				case "SIP-INFO" :
					var func = function(){} ;
					func.prototype.insertDTMF = (key, duration, gap) =>{
						var description = "Signal="+key+"\nDuration="+duration ;
						var type= "application/dtmf-relay";
						this.dialog.info( description, type)
					};
					this.dtmfSender = new func() ;
				break;
				case "RTP-EVENT" :
					if ( ! this.RTCPeerConnection.createDTMFSender ) {
						throw new Error(" RTCPeerConnection method createDTMFSender() !!!! which is not support by this browser", 500);
					}
  					if (mediaStream !== null) {
    						var localAudioTrack = mediaStream.getAudioTracks()[0];
						this.dtmfSender = this.RTCPeerConnection.createDTMFSender(localAudioTrack);
						this.dtmfSender.ontonechange = (tone) => {
							this.webrtc.fire("dtmfOnToneChange", tone , this);
						};

  					} else {
						throw new Error( 'No local stream to create DTMF Sender', 500)
  					}
				break;
			}
		}

		sendDtmf (code, key, event) {
			if ( this.dialog.status !== this.dialog.statusCode.ESTABLISHED ) {
				return ;
			}
			if (this.dtmfSender) {
				var duration = 500;
				var gap = 50;
				this.logger('DTMF SEND ' + key + '  duration :  '+ duration + ' gap :  ' + gap , "DEBUG");
				return this.dtmfSender.insertDTMF(key, duration, gap);
			}
			throw new Error(" DTMF SENDER not ready");
		}

		createOffer (){
			return  this.RTCPeerConnection.createOffer((sessionDescription) => {
				this.sessionDescription = parseSdp.call(this, sessionDescription);
				try{
					this.from.setDescription(this.RTCPeerConnection.setLocalDescription(this.sessionDescription, () => {
						// ASYNC CANDIDATES
						if (  this.asyncCandidates ){
							// INVITE
							this.dialog = this.webrtc.protocol.invite(this.to.name, this.sessionDescription);
							this.callId = this.dialog.callId ;
							this.webrtc.fire("onInvite", this, this.to, this.sessionDescription );
						}else{
							// SYNC CANDIDATES
							/*this.webrtc.listen(this, "onIcecandidate" , function(transaction, candidates, peerConnection){
								if ( peerConnection.localDescription.type == "offer" ){
									this.sessionDescription = parseSdp.call(this, peerConnection.localDescription ) ;
									if ( this.dialog ){
										var to = this.dialog.to.replace("<sip:", "").replace(">","") ;
										this.dialog.invite(to, this.sessionDescription);
									}else{
										this.dialog = this.webrtc.protocol.invite(this.to.name, this.sessionDescription);
										this.webrtc.fire("onInvite", this, this.to.name, this.sessionDescription );
										this.callId = this.dialog.callId ;
									}
								}
							})*/
						}
					},
					(error) => {
						this.error = error ;
						this.webrtc.fire("onError", this , error) ;
					}));
				}catch(e){
					throw e;
				}
			},
 			(error) => {
				this.webrtc.fire("onError", this , error) ;
			},
			this.from.settings.constraintsOffer);
		}

		setRemoteStream (event){
			if (event){
				//console.log(event.stream.getVideoTracks());
				this.to.createMediaStream(null, null);
				this.to.mediaStream.setStream(event.stream);
				var type = this.RTCPeerConnection.remoteDescription.type ;
				if (event.type === "video" || event.type === "addstream" ){
					this.webrtc.notificationsCenter.fire( "onRemoteStream", type, event, this.to.mediaStream, this);
				}
			}
			return this.to.createMediaStream ;
		}

		setRemoteDescription (type, user, description, dialog){
			//console.log("setRemoteDescription")
			this.currentTransaction = dialog.currentTransaction ;
			var desc = {
				type:type,
				sdp:description
			}
			//console.log( desc );
			var remoteDesc = parseSdp.call(this, desc);
			var ClassDesc = new RTCSessionDescription( remoteDesc );

			this.remoteDescription = this.RTCPeerConnection.setRemoteDescription(
				ClassDesc,
				() => {
					if (this.RTCPeerConnection.remoteDescription.type == "offer"){
						//console.log("WEBRTC : onRemoteDescription ");
						//this.doAnswer(dialog);
						this.webrtc.fire("onOffer", this.webrtc, this);
						this.webrtc.fire("onRemoteDescription", this.from, this, this.to);
					}else{
						this.webrtc.fire( "onOffHook", this , dialog );
					}
				},
				(error) => {
					this.error = error ;
					this.webrtc.fire( "onError", this, error )
				}
			);
			return this.remoteDescription;
		}

		doAnswer (dialog) {
			return this.RTCPeerConnection.createAnswer(
				(sessionDescription) => {
					this.from.setDescription(sessionDescription) ;
					this.RTCPeerConnection.setLocalDescription(sessionDescription, () => {
						this.sessionDescription = sessionDescription ;
						if ( this.asyncCandidates ){
							this.fire("onCreateAnwser", this.to, this.sessionDescription, this, dialog);
						}
						this.webrtc.fire( "onOffHook",this , dialog );
					},
					(error) => {
						this.error = error ;
						this.webrtc.fire( "onError", this , error);
					});
				},
				// error
				(e) => {
					this.error = e ;
					this.webrtc.fire( "onError", this ,e);
				},
				this.from.settings.constraints
			);
		}

		bye (){
			if ( this.dialog  ){
				this.dialog.bye();
			}
		}

		cancel (){
			if ( this.currentTransaction ){
				this.currentTransaction.cancel();
			}
			this.webrtc.closeTransaction(this, this.to.name)
		}

		decline (){
			if ( this.currentTransaction ){
				this.currentTransaction.decline();
			}
			this.webrtc.closeTransaction(this, this.to.name);
		}

		close (){
			this.logger("WEBRTC CLOSE TRANSACTION  : "+ this.callId, "DEBUG" );
			this.RTCPeerConnection.close();
			this.webrtc.unListen( "onKeyPress", this.sendDtmf ) ;
			delete this.RTCPeerConnection ;
			return this ;
		}
	};
	
	/*
 	 *
 	 *	CLASS WEBRTC
 	 *
 	 */
	var defaultSettings = {
		audio		: true,
		video		: true,
		protocol	: "SIP",
		sipPort		: 5060,
		sipTransport	: "WSS",
		dtmf		: "SIP-INFO",	// "SIP-INFO", "RTP-EVENT"
		/*
 		 * STUN  => { iceServers: [{ url: ! stage.browser.Gecko ? 'stun:stun.l.google.com:19302' : 'stun:23.21.150.121'}] }
 		 * TURN  => { iceServers: [{ url: "turn:webrtc%40live.com@numb.viagenie.ca", credential: ""}] }
		 */ 		
		iceServers	: null,	 
		//constraints	: { mandatory: { 'OfferToReceiveAudio': true, 'OfferToReceiveVideo': true } },
		//constraintsOffer: stage.browser.Gecko ? {'mandatory': {'MozDontOfferDataChannel':true}} : null,
		//optional	: { optional: [{ "RtpDataChannels": true},{'DtlsSrtpKeyAgreement': 'true'}]}
		//optional	: stage.browser.Gecko ? { optional: [{ "RtpDataChannels": true}]} :  { optional: [{ "RtpDataChannels": true},{'DtlsSrtpKeyAgreement': 'true'}]},
		optional	: stage.browser.Gecko ? { optional: []} :  { optional: [{'DtlsSrtpKeyAgreement': 'true'}]},
		asyncCandidates : false
	};


	var WebRtc = class WebRtc  extends stage.Service {

		constructor(server, transport, settings){

			super("WEBRTC", null, null, settings);
			this.settings = stage.extend(true, {}, defaultSettings, settings);
			this.protocol = null;
			this.socketState = "close" ;
			this.transactions = {};
			//this.users = {};
			this.transport = this.connect( transport ) ;
			if ( this.transport && this.transport.publicAddress ){
				this.publicAddress = this.transport.publicAddress;
				//this.publicAddress = server;
				//this.publicAddress = this.transport.domain;
			}
			this.server = server ;
			this.init();
		}

		init (){
			delete this.protocol ;
			this.protocol = null ;

			// EVENTS WEBRTC
			this.listen(this, "onInvite", function(transaction , userTo, description){
				this.transactions[transaction.callId] = transaction ;
			});

			this.listen(this, "onOffer", function(webrtc, transaction){
				this.transactions[transaction.callId] = transaction ;
			});

			this.listen(this, "onAccept", function(webrtc, transac){
				transac.doAnswer(transac.dialog);
				//transac.setRemoteDescription("offer", transac.to, transac.to.description, transac.dialog);
			});

			this.listen(this, "onDeclineOffer", function(webrtc, transac){

				var ret = transac.dialog.currentTransaction.createResponse(
					603,
					"Declined"
				);
				ret.send();

				/*var ret = message.transaction.createResponse(
					603,
					"Declined"
				);
				ret.send();*/
				this.closeTransaction(transac);
			});

			// MANAGE PROTOCOL
			switch (this.settings.protocol){
				case "SIP":
					this.protocol = new stage.io.protocols.sip(this.server, this.transport,{
						portServer	: this.settings.sipPort ,
						transport	: this.settings.sipTransport,
					});

					this.protocol.listen(this, "onRegister", function(sip, message){
						switch (message.code){
							case 200 :
								this.user.createMediaStream((stream) => {
									this.user.stream = stream ;
									this.notificationsCenter.fire("onMediaSucces", this.user.mediaStream, this.user);
								},(e) => {
									this.notificationsCenter.fire("onError", this, e);
								});
								this.notificationsCenter.fire("onRegister", this.user, this);
							break;
							default :
								this.notificationsCenter.fire("onError", this.protocol, message);
							break;
						}
					});

					this.protocol.listen(this, "onUnRegister",function(sip, message){
						this.fire("onUnRegister", sip, message);
					})

					this.protocol.listen(this,"onRinging",function(sip, message){
						var transaction = this.transactions[message.callId];
						if ( transaction ){
							this.notificationsCenter.fire( "onRinging", message.toName , transaction);
						}
					});

					this.protocol.listen(this,"onTrying",function(sip, message){
						var transaction = this.transactions[message.callId];
						if ( transaction ){
							this.notificationsCenter.fire( "onTrying", message.toName , transaction);
						}
					});

					this.protocol.listen(this,"onInfo",function(message){
						var transaction = this.transactions[message.callId];
						//console.log(message);
						if (message.contentType === "application/dtmf-relay" ){
							this.fire( "onDtmf", message.body.dtmf , transaction);
						}
					});

					this.protocol.listen(this,"onCancel",function(message){
						var transaction = this.transactions[message.callId];
						if (transaction){
							this.notificationsCenter.fire( "onCancel", message.body.body , transaction );
							this.closeTransaction(transaction, message.fromName);
						}
					});

					this.protocol.listen(this, "onInvite", function(message, dialog){
						switch(message.header["Content-Type"]){
							case "application/sdp" :
								if ( message.rawBody ){

									if ( dialog.status === dialog.statusCode.INITIAL){

										// TODO MANAGE MULTI CALL

										var res = message.transaction.createResponse(100, "trying");
										res.send();

										// transaction WEBRTC
										try {
											var transac = this.createTransaction(message.fromName, dialog , {
												displayName: message.fromNameDisplay || ""
											});
											transac.to.setDescription( message.rawBody );
										}catch(e){
											var res = message.transaction.createResponse(500, e.message || e);
											res.send();
											return ;
										}

										var res = message.transaction.createResponse(180, "Ringing");
										res.send();

										try {
											transac.setRemoteDescription("offer", transac.to, transac.to.description, transac.dialog);
											//this.notificationsCenter.fire("onOffer", message, transac.to, transac);
											//this.fire("onOffer", this, transac);
										}catch(e){
											var res = message.transaction.createResponse(500, e.message || e);
											res.send();
										}

										return ;
									}
									if ( dialog.status === dialog.statusCode.ESTABLISHED){
										// HOLD THE LINE
										message.transaction.decline();
									}
								}
							break;
							case "ice/candidate" :
								if ( message.rawBody ){
									var transaction = this.transactions[message.callId];
									if ( ! transaction ) {
										var ret = message.transaction.createResponse(500, "no transaction ");
										ret.send();
										return ;
									}
									var res = JSON.parse(message.rawBody) ;
									var ret = message.transaction.createResponse(100, "trying");
									ret.send();
									for (let i=0 ; i<res.length;i++){
										var candidate = new RTCIceCandidate(res[i]);
										transaction.RTCPeerConnection.addIceCandidate(candidate,
											() =>{
												this.logger("WEBRTC remote CANDIDATES   " +res[i].candidate, "DEBUG" );
											},
											(e) => {
												console.log(e);
												this.logger("WEBRTC Error CANDIDATES " +res[i].candidate ,"ERROR");
											}
										);
									}
									if ( transaction.candidates.length ){
										var ret = message.transaction.createResponse(200, "OK", JSON.stringify(transaction.candidates), "ice/candidate");
										ret.send();
										transaction.candidates= [];
									}else{
										var ret = message.transaction.createResponse(200, "OK");
										ret.send();
										//transaction.candidates= [];
										/*this.listen(this, "onIcecandidate" , function(transaction, candidates, peerConnection){
											var ret = message.transaction.createResponse(200, "OK", JSON.stringify(transaction.candidates), "ice/candidate");
											ret.send();
											transaction.candidates= [];
										});*/
									}
								}
							break;
							default:
								this.notificationsCenter.fire("onError", this.protocol,  message);

						}
					});

					this.protocol.listen(this, "onTimeout",function(sip, message){
						this.notificationsCenter.fire("onTimeout", message.method, 408, message);
					});

					this.protocol.listen(this, "onDecline",function(message){
						if ( message.callId in  this.transactions ){
							var transac =  this.transactions[message.callId];
							this.fire("onDecline", this, transac );
							this.closeTransaction(transac);
						}
					});

					this.protocol.listen(this, "onError",function(Class, message){
						this.notificationsCenter.fire("onError", Class, message);
						var transac =  this.transactions[message.callId];
						if  (transac ){
							this.closeTransaction(transac, transac.to.name);
						}
					});

					this.protocol.listen(this, "onQuit",function(protocol){
						this.close();
					});

					this.protocol.listen(this, "onInitCall",function(to, dialog, transaction){
						if ( dialog.callId in this.transactions ){
							var transac =  this.transactions[dialog.callId];
							transac.currentTransaction = transaction ;
							this.notificationsCenter.fire("onInitCall", transac );
						}
					});

					this.protocol.listen(this, "onBye",function(message){
						if ( message.callId in  this.transactions ){
							var transac =  this.transactions[message.callId];
							var name = message.fromName
						}
						if ( transac ){
							this.notificationsCenter.fire("onOnHook", transac ,message);
							this.closeTransaction(transac, name);
						}else{
							// WHEN USER LOCAL STOP REGISTRATION
							if ( message.fromName === this.user.name ){
								this.close()
							}
						}
					});

					this.protocol.listen(this, "onCall", function(message){
						var transac =  this.transactions[message.callId];
						if ( message.toNameDisplay ){
							transac.to.displayName = message.toNameDisplay ;
						}
						//var from = this.users[message.toName];
						if ( message.dialog.status === message.dialog.statusCode.EARLY && message.header["Content-Type"] == "application/sdp"){
							this.notificationsCenter.fire("onAnwer", message);
							transac.to.setDescription(message.rawBody);
							transac.setRemoteDescription("answer", transac.to, message.rawBody, message.dialog);
							/*if ( this.settings.asyncCandidates && transac.candidates.length){
								//console.log( message.dailog)
								message.dialog.invite(message.to, JSON.stringify(transac.candidates), "ice/candidate")
							}*/
							//this.notificationsCenter.fire( "onOffHook", transac , message );
						}else{

						}
						if ( message.header["Content-Type"] == "ice/candidate"){
							if (transac.candidates.length){
								var res = JSON.parse(message.rawBody) ;
								for (let i=0 ; i<res.length;i++){
									var candidate = new RTCIceCandidate(res[i]);
									transac.RTCPeerConnection.addIceCandidate(candidate,
										() => {
											//console.log("Succes Candidate")
											this.logger("WEBRTC ADD remote CANDIDATES :  " + res[i].candidate);
										},
										(e) => {
											console.log(e);
											this.logger("WEBRTC Error CANDIDATES " + res[i].candidate, "ERROR" );
										}
									);
								}
							}
						}
					});

					this.protocol.listen(this, "onMessage",function(message){
						this.fire("onMessage", message);
					});

					this.protocol.listen(this, "onSend",function(message){
						this.fire("onSend", message);
					});

					this.listen(this, "onError", function(Class, error){
						switch (true){
							case ( Class instanceof  WebRtc ) :
							break ;
							case ( Class instanceof Transaction ) :
								//console.log(Class.currentTransaction )
								if ( Class.currentTransaction ){
									var response = Class.currentTransaction.createResponse( 500, error.message || error );
									response.send();
								}
								this.closeTransaction(Class, Class.to.name);
							break ;
							case ( Class instanceof  Error ) :
							break ;
						}
					});
				break;
				default:
					throw new Error("WEBRTC Protocol not found " ) ;
			}
		}

		connect (transport){
			//console.log(transport instanceof stage.realtime  )
			if ( transport ){
				transport.listen(this, "onConnect" , function(){
					this.socketState = "open" ;
				});
				transport.listen(this, "onClose" , function(){
					this.socketState = "close" ;
				})
				return 	transport ;
			}
		}
		
		createTransaction (userTo, dialog, settings){
			try {
				var transaction = new Transaction(this, this.user, userTo, dialog, settings);
				return transaction ;
			}catch(e){
				this.fire("onError", this, e);
				throw e ;
			}
		}

		unRegister (){
			//console.log( "WEBRTC unregister")
			this.close();
			if (this.protocol){
				this.protocol.unregister();
			}
		}

		register (userName, password, settings){
			this.user = new User(userName, settings);
			this.protocol.register( userName, password, settings )
		}


		createOffer (userTo) {
			var to = new User(userTo);
			//this.users[userTo] = to ;
			var transac = this.createTransaction(to);
			transac.createOffer();
			return transac ;
		}

		closeTransaction (transation, name) {
			if ( transation ){
				transation.close();
				delete this.transactions[transation.callId];
				//delete this.users[name];
			}
		}

		close (){
			this.fire("onQuit", this);
			for (var trans in this.transactions){
				try {
					this.transactions[trans].bye();
					this.transactions[trans].close();
				}catch(e){

				}
				delete this.transactions[trans];
			}
		}

		quit () {
			this.protocol.bye();
		}
	};

	stage.media.webrtc = WebRtc ;
	stage.media.webrtcTransaction = Transaction ;
	stage.media.userMedia = User ; 
	return WebRtc ;
};
