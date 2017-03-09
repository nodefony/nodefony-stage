const Twig = require("twig");

module.exports =  function(stage){

	'use strict';

	var settingsSyslog = {
		//rateLimit:100,
		//burstLimit:10,
		moduleName:"KERNEL",
		defaultSeverity:"INFO"
	};

	var defaultSettings = {
		debug:false,
		router:true,
		i18n:true,
		location:{
			html5Mode:false,
			hashPrefix:"/"
		}
	};

	var defaultEnvEnable = {
		dev:		true,
		development:	true,	
		prod:		true,
		production:	true,	
	};


	/*
 	 *	OVERRIDE TWIG IMPORT TEMPLATE
 	 */
	var loadRemoteTwig = function(Twig, location, params, callback, error_callback){
		var id  = params.id,
		method      = params.method,
		async       = params.async,
		precompiled = params.precompiled,
		template    = null;

		// Default to async
		if (async === undefined) async = true;

		// Default to the URL so the template is cached.
		if (id === undefined) {
			id = location;
		}
		params.id = id;

		// Check for existing template
		if (Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) {
			// A template is already saved with the given id.
			if (callback) {
				callback(Twig.Templates.registry[id]);
			}
			return Twig.Templates.registry[id];
		}
		//console.log(params.async)
		$.ajax({
			url:location,
			async:async,
			success:(mydata, status, xhr) => {
				var moduleName = this.getModuleName( location )
			        if (precompiled === true) {
					mydata = JSON.parse(mydata);
				}
				params.url = location;
				params.data = mydata;
				template = new Twig.Template(params);
				if (this.modules[moduleName]){
					var module = this.modules[moduleName] ;
					var name = module.getTemplateName(location)
					module.registerTemplate(name, template, "template")
				}
				if (callback) {
					callback(template);
				}
			},
			error: (xrh, status, message) => {
				error_callback(xrh, status, message)
			}
		})
		if (async === false) {
			return template;
		} else {
			// placeholder for now, should eventually return a deferred object.
			return true;
		}	
	};

	/*
	*
	*	KERNEL CLASS	
	*/

	var Kernel = class Kernel  extends stage.Service {

		constructor(environment, settings){

			super("KERNEL",null, null ,{
				syslog:settingsSyslog
			});

			this.container.set("kernel", this);

			this.modules = {};
			this.settings = stage.extend(true, {}, defaultSettings , settings );

			if ( environment in defaultEnvEnable ){
				switch ( environment ){
					case "dev" :
					case "development" :
						this.environment = "dev";
					break;
					case "prod" :
					case "production" :
						this.environment = "prod";
					break;
				}
			}else{
				this.logger("Bad Variable environment :" + environment,"WARNING");
				this.environment = "prod";
			}

			this.debug = this.settings.debug ;
			this.booted = false;
			this.isDomReady = false;
			this.uiContainer = null;

			// syslog
			this.initializeLog(settingsSyslog);

			// autoloader
			this.autoloader = new stage.autoload(this, {
				transport:"script"
			});
			this.container.set("autoloader", this.autoloader);

			
			// Router
			this.initRouter();

			// template
			this.initTwig();

			// translation i18n
			this.initTranslation();

			// Service REST
			this.initRest()

			// EVENT NATIF
			$(document).ready( this.listen(this, "onDomReady", this.domReady) );
			$(window).resize( this.listen(this,"onResize") );
			$(window).on( "unload", this.listen(this,"onUnLoad"));
			$(window).on( "load", this.listen(this,"onLoad"));

			//BOOT	
			this.listen(this, "onBoot" , this.boot)
			//READY
			this.listen(this, "onReady" , this.ready)

			this.notificationsCenter.settingsToListen(this.settings, this);
		}
		
		initRouter (){
			if ( this.settings.router ){
				// location
				this.initLocation();
				this.router = new stage.router(this, this.container);
				this.container.set("router", this.router);
			}
		}

		initLocation (){
			this.locationService = new stage.location(this, this.settings.location) ;
			this.container.set("location", this.locationService);
		}

		initRest (){
			if (stage.Rest) {
				this.restService = new stage.Rest(this.container);
				this.set("rest", this.restService);
			}
		}

		initTranslation (){
			if ( this.settings.i18n ){
				if ( ! stage.i18n ){
 		       			this.logger("you must load transation i18n services js file !!!!!", "ERROR")
					return;
				}
				this.i18n = new stage.i18n(this, this.container);
				this.container.set("i18n", this.i18n);
			}
		}

		initTwig (){
			this.logger("INITIALIZE TWIG SERVICE", "DEBUG");
			if (this.environment === "dev"){
				Twig.cache = false ;	
			}
			this.templateEngine = Twig.twig  ; 
			//extended log error traf
			Twig.extend((Twig) => {
				Twig.log.error = (message) => {
					this.logger(message, "ERROR");
				}
			});

			Twig.extend((Twig) => {
				Twig.Templates.loadRemote = loadRemoteTwig.bind(this, Twig) 
			});

			//extended FUNCTION
			Twig.extendFunction("controller", function() {
				var pattern = Array.prototype.shift.call(arguments);
				var sp = pattern.split(":");
				var module = this.getModule(sp[0]);
				if (module){
					var controller = module.getController(sp[1]);
					if (controller){
						var action = sp[2];
						if ( controller[action] ){
							return controller[action].apply(controller, arguments);	
						}
					}
				}
			}.bind(this));
			this.container.set("twig", this.templateEngine);
			return this.templateEngine ;
		}

		domReady (){
			if ( ! this.booted ) return ; 
			this.logger("domReady", "DEBUG");
			this.fire("onDomLoad", this);
			var element = this.uiContainer ? $(this.uiContainer) : $("body");
			try {
				if ( this.modules.app ){
					this.modules.app.initialize(element);	
				}		
				for (var module in this.modules){
					if (module === "app") continue;
					this.modules[module].initialize(element);
				}	
				this.fire("onReady", this);
				this.isDomReady = true;
			}catch(e){
				this.logger(e,"ERROR");
			}
		}
	
		getModule (name){
			return this.modules[name] ;
		}

		initializeLog (settings){
			if (this.environment === "dev"){
				// CRITIC ERROR
				this.syslog.listenWithConditions(this,{
					severity:{
						data:"CRITIC,ERROR"
					}		
				},function(pdu){
						console.log(pdu.payload)
					if (pdu.payload.stack ){
							console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload.stack);
					}else{
						console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload);	
					}
					/*if (pdu.typePayload === "Error" ){
						if (pdu.payload.stack ){
							console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload.stack);
						}
						return;
					}
					console.error( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+  pdu.payload);*/	
				});

				// INFO DEBUG
				var data ;
				this.debug ? data = "INFO,DEBUG" : data = "INFO" ;
				this.syslog.listenWithConditions(this,{
					severity:{
						data:data
					}		
				},function(pdu){
					console.info( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+ pdu.payload);
				});
				this.syslog.listenWithConditions(this,{
					severity:{
						data:"WARNING"
					}		
				},function(pdu){
					console.warn( "SYSLOG " + pdu.severityName +" " + pdu.msgid + " "+new Date(pdu.timeStamp) + " " + pdu.msg+" : "+ pdu.payload);
				});
			}
			return this.syslog;
		}

		boot (){
			this.booted = true;
		}

		ready (){
			//this.fire("onUrlChange", this.router.url() )
		}

		loadModule (url, settings){
			var res = stage.io.urlToOject(url);
			var moduleName = res.basename ;
					
			return $.ajax(url,stage.extend( {
				cache:false,
				method:"GET",
				//async:false,
				dataType:"xml",
				success:(data, status, xhr) => {
					try {
						//FIXME try to parse with url
						var res = stage.xml.parseXml(data);
						var moduleName = res.module["@id"];
						var type = res.module["@type"];
						var moduleSrc = res.module["@src"];
				 	
						switch ( type ){
							case "application/javascript" :
								if ( moduleSrc ){
									if (moduleName in this.modules) {
										this.modules[moduleName].initialize();
										this.modules[moduleName].fire("onInitialize", moduleName);	
										this.fire("onInitializeModule", moduleName);	
									} else {							
										this.autoloader.load(moduleSrc, (error, transport) => {
											if (error){
												this.fire("onError", error);
												throw error;
											}
											this.registerModule(moduleName, res);
											if (moduleName === "app")
												this.fire("onBoot", this);
										});
									}
								}
							break;
						}
					}catch(e){
						this.logger(e, "ERROR");
						this.fire("onError", e);
						throw e ;
					}
				},
				error:(xhr, status, message) => {
					this.fire("onGetConfigError", moduleName);
					this.fire("onError", message);	
				}
			}, settings))
		}

		registerModule (name, xml){
			if (name in stage.modules){
				var kernelcontext = this;
				var Class = stage.modules[name]; //.herite(stage.Module);
				this.container.addScope(name);
				Class.prototype.name = name;
				try {
					if (this.isDomReady){
						this.modules[name] = new Class(this, xml,{
							onReady:() => {
								if (this.initialize){
									try {
										this.initialize();
										this.fire("onInitialize", name);	
										kernelcontext.fire("onInitializeModule", name);
									}catch(e){
										this.logger("INITIALIZE MODULE : "+name +" "+e, "ERRROR");
										throw e;
									}
								}
						}});	
						
					}else{
						this.modules[name] = new Class(this, xml);
					}
					this.container.set(name, this.modules[name]);
				}catch(e){
					this.logger("INSTANCE MODULE : "+name +" "+e, "ERRROR")
					throw e;
				}
			}
		}

		getModuleName (url){
			var module = stage.dirname(url);
			var tab = module.split("/")
			return tab[tab.indexOf("Resources")-1];
		}
	};

	stage.kernel = Kernel ;
	return  Kernel;
};
