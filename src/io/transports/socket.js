module.exports =  function(stage){

	var defaultSettings = {
		type:"websocket" //   websocket | poll | longPoll 
	};

	var bestTransport = function(){
	
	}; 

	var socket = class socket extends stage.notificationsCenter.notification  {

		constructor(url, localSettings){
			this.settings = stage.extend({}, defaultSettings, localSettings);
			super(this.settings, this);	

			switch (this.settings.type){
				case "websocket":
					this.socket = stage.io.transports.websocket ; 
					break;
				case "poll":
					this.socket = stage.io.transports.ajax ;
					break;
				case "longPoll":
					this.socket = stage.io.transports.ajax ;
					break;
			}

			this.listen(this, "onConnect");
			this.listen(this, "onClose");
			this.listen(this, "onError");
			this.listen(this, "onMessage");
			this.listen(this, "onTimeout");
		}

		write(settings){
			this.transport.send();
		}

		close (settings){
			this.transport.close();
		}

		connect (url, settings){
			this.transport = new this.socket(url, settings);
			this.transport.onmessage = this.listen(this, "onMessage");
		}

		destroy (settings){
			this.transport = null ;
			this.clearNotifications();
		}
	};

	stage.io.socket = socket ;
	return socket ;

};
