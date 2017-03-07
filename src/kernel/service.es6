module.exports =  function(stage){

	'use strict';

	var settingsSyslog = {
		//rateLimit:100,
		//burstLimit:10,
		moduleName:"SERVICE ",
		defaultSeverity:"INFO"
	};

	var defaultOptions = {
	};


	const Service = class Service {
	
		constructor(name, container, notificationsCenter, options ){

			if (name){
				this.name = name ;
			}
			options = stage.extend( {}, defaultOptions, options) ;

			if ( container instanceof stage.Container  ){
				this.container = container ;
			}else{
				if ( container ){
					throw new Error ("Service stage container not valid must be instance of stage.Container");
				}
				this.container = new stage.Container(); 
				this.container.set("container", this.container);
			}
			this.kernel = this.container.get("kernel");
			this.syslog = this.container.get("syslog");
			if ( ! this.syslog ){
				this.settingsSyslog = stage.extend({}, settingsSyslog , {
					moduleName: this.name	
				},options.syslog || {} );
				this.syslog = new stage.syslog( this.settingsSyslog );	
				this.set("syslog", this.syslog);
			}else{
				this.settingsSyslog = this.syslog.settings ;	
			}
			if ( notificationsCenter instanceof stage.notificationsCenter.notification ){
				this.notificationsCenter = notificationsCenter ;
			}else{
				if ( notificationsCenter ){
					throw new Error ("Service stage notificationsCenter not valid must be instance of stage.notificationsCenter.notification");
				}
				this.notificationsCenter = this.container.get("notificationsCenter");
				if ( ! this.notificationsCenter ){
					this.notificationsCenter = stage.notificationsCenter.create(options, this);
					if (! this.kernel ){
						this.set("notificationsCenter", this.notificationsCenter);
					}else{
						if ( this.kernel.container !== this.container ){
							this.set("notificationsCenter", this.notificationsCenter);
						}
					}
				}
			}	
		}

		getName (){
			return this.name;
		}

		clean(){
			this.settingsSyslog = null ;
			delete this.settingsSyslog ;
			this.syslog = null  ;
			delete this.syslog ;
			this.removeAllListeners();
			this.notificationsCenter = null ;
			delete this.notificationsCenter ;
			this.container = null ;
			delete this.container ;
			this.kernel = null ;
			delete this.kernel ;
		}
	
		logger(pci, severity, msgid,  msg){
			try {
				if (! msgid) { msgid = "SERVICE " + this.name + " "; }
				return this.syslog.logger(pci, severity, msgid,  msg);	
			}catch(e){
				console.log(pci);
			}
		}

		/**
	 	*	@method fire
	 	*	@param {String} event name 
	 	*	@param {Arguments} ... arguments to inject  
         	*/
		fire (){
			//this.logger(ev, "DEBUG", "EVENT KERNEL")
			return this.notificationsCenter.fire.apply(this.notificationsCenter, arguments);
		}

		/**
	 	*	@method listen
	 	*	@param {Oject} context
	 	*	@param {String} eventName
	 	*	@param {Function} listener
         	*/
		listen (){
			return this.notificationsCenter.listen.apply(this.notificationsCenter, arguments);
		}

		/**
	 	*	@method removeListener
	 	*	@param {Oject} eventName 
	 	*	@param {String} listener
         	*/
		removeListener (){
			return this.notificationsCenter.unListen.apply(this.notificationsCenter, arguments);
		}

		/**
	 	*	@method removeAllListeners
         	*/
		removeAllListeners (){
			return this.notificationsCenter.clearNotifications.apply(this.notificationsCenter, arguments);
		}

		/**
	 	 *	@method get
	 	 *	@param {String} name of service
         	 */
		get (name){
			if (this.container){
				return this.container.get(name);
			}
			return null;
		}

		/**
	 	*	@method set
	 	*	@param {String} name of service
	 	*	@param {Object} instance of service
         	*/
		set (name, obj){
			if (this.container){
				return this.container.set(name, obj);
			}
			return null;
		}

		getParameters (){
			return this.container.getParameters.apply(this.container , arguments);
		}

		setParameters (){
			return this.container.setParameters.apply(this.container ,arguments);
		}

		has (){
			return this.container.has.apply(this.container ,arguments);	
		}
	};

	stage.Service = Service;	
	return Service ;
};
