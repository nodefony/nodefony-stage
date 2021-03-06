module.exports =  function(stage){

	'use strict';

	/*
 	 *
 	 *	Model
 	 *
 	 */

	var urlParser = function(container, url, name, template, obj){
  		var index = url.indexOf("views") ;
  		if (index < 0 ){
    			var text = "URL TEMPLATE BAD PATH :" + url ;
    			this.logger(text ,"ERROR")
    				throw new Error(text) ;
  		}
  		var res = url.slice(index+"views".length+1).split("/");
  		res.pop();
  		if (res.length){
    			var obj = container ;
    			for (var i = 0; i<res.length;i++){
      				if ( obj[res[i]] ){
        				if (i !== res.length-1){	
        					obj = obj[res[i]] ;
        				}else{
          					obj[res[i]][name] = template;
        				}
      				}else{
        				if (i !== res.length-1){
        					obj[res[i]] = {};	
        					obj = obj[res[i]] ;
        				}else{
          					obj[res[i]] = {};
          					obj[res[i]][name] = template;
        				}
      				}
    			}
  		}else{
    			container[name] = template ;
  		}
	};

	var regI18n = new RegExp("^(.*)\.(.._..)\.(.*)$");

	var modelModule = class modelModule {

		constructor(config){
			this.rootName = "module";
			var documentXml = this.parser(config);		
			//this.name = this.config.name["@short"];
			this.name = documentXml.module['@id'];
		}

		parser (ele){
			switch ( stage.typeOf(ele) ){
				case "document" :
					var res  = stage.xml.parseXml(ele) ; 
					break;
				case "object" :	
					res = ele ;
					break;
			}
			if ( !  res[ this.rootName ]){
				throw new Error ("BAD MODULE CONFIG ");
			}
			this.config = res[ this.rootName ] ; 
			return res;
		}

		registerScript ( src){
			this.autoloader.load( src, (error, transport) => {
				if (error){
					this.logger(error, "ERROR");
 			       		return ;
				}
				this.logger("LOAD SCRIPT : "+src ,"DEBUG");
			});
		}

		registerStyle ( src){
			this.autoloader.load( src, (error, transport) => {
				if (error){
					this.logger(error, "ERROR");
 			       		return ;
				}
				this.logger("LOAD STYLE : "+src ,"DEBUG");
			});
		}

		cacheFont ( src){
			$.ajax({
				async: false,
			cache: true,
			url: src,
			beforeSend:  ( xhr ) =>  {
				xhr.overrideMimeType("application/octet-stream");
			},
			success: () => {
				this.logger("LOAD FONT : " + src, "DEBUG");
			},
			error: (e) => {
				console.log(e);
				this.logger(src + " : " + message, "ERROR");
			}
			});
		}

		registerTemplate (name, src, type){
			//console.log("NAME :" + name)
			switch(type){
				case "application/twig":
					//var obj = urlParser.call(this, this.templates, src, name);
					this.twig({
						id: this.name+":"+name,
					href: src,
					async: false,
					//debug:true,
					load:(template) => {
						urlParser.call(this, this.templates, src, name , template )
						this.logger("LOAD TEMPLATE : "+name +" ==>"+src ,"DEBUG");
					//console.log(this.templates)
					//obj[name] = template;
					//console.log(template.extend)
					//this.templateEngine
					},
					error:(xrh, status, message) => {
						this.logger("TEMPLATE :" + src + " : "+ message, "ERROR")
					}
					});
					break;
				case "text/html":
					break;
				case "application/xml":
				case "text/xml":
					break;
				case "template":
					var obj = urlParser.call(this, this.templates, src.url, name, src);
					//obj[name] = src;
					this.logger("LOAD IMPORT TEMPLATE : "+name +" ==>"+src.url ,"DEBUG");
					break;
				default :
					this.registerTemplate( name, src, "application/twig" );
					break
			}
		}

		registerView (name, src, type){
			switch(type){
				case "text/javascript":
				case "application/javascript":
					this.autoloader.load( src, (error, transport) => {
						if (error){
							this.logger(error, "ERROR");
							return ;
						}
						//this.views[name] = new ;
						var Class = stage.views[name];
						this.views[name] = new Class(this.container, this);
						this.logger("LOAD VIEW : "+src ,"DEBUG");
					});
					break;
				default:
			}
		}

		registerController (name, src){
			this.autoloader.load( src, (error, transport) => {
				if (error){
					this.logger(error, "ERROR")
					throw error;
				}
				try {
					var Class = stage.controllers[name]; 
					this.controllers[name] = new Class(name, this.container, this);
					this.logger("LOAD CONTROLLER : "+name +" ==>"+src ,"DEBUG");
				}catch(e){
					throw e ;
				}
			});
		}

		initialiseRest (name, url, optionsGlobal){
			var rest = this.kernel.restService ;
			var ele = rest.addApi(name, url, optionsGlobal);
			this.kernel.set(name, ele);
		}

		registerTranslation (src, type){
			var service = this.get("i18n");
			if (! service){
				this.logger("SERVICE I18N not loaded abort load Translation : "+src,"WARNING");
				return ;
			}
			$.ajax({
				url:src,
				async:false,
				success:(data, status, xhr) => {
					var name = stage.basename(src) ;
					this.logger("LOAD TRANSLATION "+ type +" : "+name +" URL = "+src ,"DEBUG");
					var res = regI18n.exec(name);	
					if ( ! res ){
						this.logger("SERVICE I18N  abort load Translation : "+src+ " Bad File name format","WARNING");
						return;
					}
					var domain = res[1];
					var locale = res[2];
					service.registerI18n(name, locale, domain, data);
				},
				dataType: type || "json",
				error:(xhr, status, err) => {
					this.logger(err, "ERROR")
				}	
			});
		}

		reader (){
			var root = this.config;
			for (var node in this.config){
				switch ( node ){
					case "content" :
						break;
					case "controllers":

						var controllers = root[node].controller;
						if(controllers){
							var tab = stage.typeOf(controllers) === "object" ? [controllers] : controllers ;
							for (var i = 0 ; i < tab.length ; i++){
								var name = tab[i]["@name"];
								var src = tab[i]["@src"];
								this.registerController(name, src)
							}
						}

						break;
					case "views":
						var views = root[node].view;
						if(views){
							var tab = stage.typeOf(views) === "object" ? [views] : views ;
							for (var i = 0 ; i < tab.length ; i++){
								var name = tab[i]["@name"];
								var src = tab[i]["@src"];
								var type = tab[i]["@type"];
								this.registerView(name, src, type);
							}
						}

						break;
					case "modules":
						var modules = root[node].module;
						if(modules){
							var tab = stage.typeOf(modules) === "object" ? [modules] : modules ;
							for (var i = 0 ; i < tab.length ; i++){
								//var name = tab[i]["@name"];
								var url = tab[i]["@href"];
								if ( ! this.isDomReady){
									this.kernel.listen(this,"onBoot",function(url){
										this.kernel.loadModule(url, {
											async:false
										});
									}.bind(this, url))
								}else{
									this.kernel.loadModule(url);
								}
							}
						}

						break;
					case "templates":
						var templates = root[node].template;
						if(templates){
							var tab = stage.typeOf(templates) === "object" ? [templates] : templates ;
							for (var i = 0 ; i < tab.length ; i++){
								var name = tab[i]["@name"];

								var src = tab[i]["@src"];
								var type = tab[i]["@type"];
								if ( ! name){
									name = this.getTemplateName(src)	
								}
								this.registerTemplate(name, src, type);
							}
						}

						break;
					case "styles":
						var styles = root[node].style;
						if(styles){
							var tab = stage.typeOf(styles) === "object" ? [styles] : styles ;
							for (var i = 0 ; i < tab.length ; i++){
								var src = tab[i]["@src"];
								this.registerStyle(src);
							}
						}

						break;
					case "scripts":
						var scripts = root[node].script;
						if(scripts){
							var tab = stage.typeOf(scripts) === "object" ? [scripts] : scripts ;
							for (var i = 0 ; i < tab.length ; i++){
								var src = tab[i]["@src"];
								this.registerScript(src);
							}
						}

						break;
					case "fonts":
						var fonts = root[node].font;
						if(fonts){
							var tab = stage.typeOf(fonts) === "object" ? [fonts] : fonts ;
							for (var i = 0 ; i < tab.length ; i++){
								var src = tab[i]["@src"];
								this.cacheFont(src);
							}
						}

						break;
					case "translations":
						var translations = root[node].translation;
						if(translations){
							var tab = stage.typeOf(translations) === "object" ? [translations] : translations ;
							for (var i = 0 ; i < tab.length ; i++){
								var src = tab[i]["@src"];
								var type = tab[i]["@type"];
								this.registerTranslation(src, type );
							}
						}

						break;
					case "icon" :
						this.icon = root[node]["@src"];
						break;
						/*case "name" :
						  console.log(root[node])
						  this.name = root[node]["@short"];
						  break;*/
					case "preference":
						break;
					case "author":
						var author = root[node];
						this.author = author["#text"];
						this.emailAuthor = author["@email"];
						this.authorLink = author["@href"];
						break;
					case "description":
						this.description = root[node];
						break;
					case "api":
						//console.log(root[node]);
						for(var ele in root[node]){
							var mvc = root[node][ele];
							var tab = stage.typeOf(mvc) === "object" ? [mvc] : mvc;
							for(var i = 0; i < tab.length; i++){
								if(ele === "rest"){
									if( this.kernel.restService )
										this.initialiseRest(tab[i]["@name"], tab[i]["@url"]);
									else
										this.logger("Api " + ele + " SERVICE REST NOT FOUND" ,"ERROR")
								} else {
									this.logger("Api " + ele + " not exist for modules" ,"ERROR");
								}
							}
						}
						break;
						break;
					case "routes":
						var routes = root[node].route;
						switch(stage.typeOf( routes)){
							case "array":
								for (var i = 0 ;i<routes.length; i++){
									var id = routes[i]["@id"];
									var path = routes[i]["@path"];
									var defaultParam = {};
									switch(stage.typeOf( routes[i]["default"])){
										case "array":
											for (var j=0 ;j<routes[i]["default"].length;j++){
												defaultParam[routes[i]["default"][j]["@key"]] =  routes[i]["default"][j]["#text"];
												//console.log(defaultParam)
											}
											break;
										case "object":
											if (routes[i]["default"]["@key"])
												defaultParam[routes[i]["default"]["@key"]] = routes[i]["default"]["#text"];
											break;
									}
									this.routes[id] = this.router.createRoute(id, path, defaultParam);	

								}
								break;
							case "object":
								for (var route in routes){
									switch (route){
										case "@id":
											var id = routes[route];
											break;
										case "@path":
											var path = routes[route];
											break;
										case "default":
											var defaultParam = {};
											switch(stage.typeOf( routes[route] )){
												case "array":
													for (var j=0 ;j<routes[route].length;j++){
														defaultParam[routes[route][j]["@key"]] =  routes[route][j]["#text"];
													}
													break;
												case "object":
													defaultParam[routes[route]["@key"]] = routes[route]["#text"]
														break;
											}
											break;
									}
								}
								this.routes[id] = this.router.createRoute(id, path, defaultParam);
								break
						}
						break;
				}
			}
		}
	};


	/*
 	*
 	*	CLASS Module
 	*
 	*/
	var regPattern = /(.*)Module:(.*):(.*)$/;

	var Module = class Module extends  modelModule  {

		constructor(kernel, config, settings){
			super(config);
			this.kernel = kernel;
			this.container = kernel.container;
			this.syslog = this.get("syslog");
			this.logger("REGISTER MODULE "+this.name, "DEBUG");
			this.autoloader = new stage.autoload(this, {
				transport:"script"
			});
			this.views = {};
			this.controllers = {};
			this.templates = {};
			this.routes = {};

			this.twig = this.get("twig");

			this.setParameters("module."+this.name, this.config);
			this.set(this.name, this);
			this.boot(settings);
		}

		listen (){
			return this.notificationsCenter.listen.apply(this.notificationsCenter, arguments);
		}

		fire (event){
			this.logger(event+" : "+ this.name , "DEBUG", "EVENT MODULE")
				return this.notificationsCenter.fire.apply(this.notificationsCenter, arguments);
		}

		logger (pci, severity, msgid,  msg){
			if (! msgid) msgid = "MODULE  "+this.name;
			return this.syslog.logger(pci, severity, msgid,  msg);	
		}

		/**
	 		*	@method get
	 		*	@param {String} name of service
         		*/
		get (name){
			return this.container.get(name);
		}

		/**
	 		*	@method set
	 		*	@param {String} name of service
	 		*	@param {Object} instance of service
         		*/
		set (name, obj){
			return this.container.set(name, obj);
		}

		setParameters (name, value){
			return this.container.setParameters(name, value);	
		}

		getParameters (name){
			return this.container.getParameters(name);	
		}

		getController (name){
			return this.controllers[name];
		}

		getTemplate (name){
			return this.templates[name];
		}

		getTemplateName (url){
			var name = stage.basename(url);
			var index = name.indexOf(".");
			if (index < 0)
				return url;
			return name.slice(0, name.indexOf(".") );
		}

		getTemplatePattern (pattern){
			var res  = regPattern.exec(pattern);
			if ( ! res ){
				var txt = "IN PATTERN :" + pattern +" BAD FORMAT " ;
				this.logger(txt,"ERROR")
					throw new Error(txt);
			}
			var moduleName = res[1];
			var pathName = res[2];
			var templateName = res[3];	
			var module = this.kernel.getModule(moduleName);
			if ( ! module ){
				var txt = "IN PATTERN :" + pattern +" MODULE :"+ moduleName +" not defined" ;
				this.logger(txt,"ERROR")
					throw new Error(txt);
			}
			var obj = module.templates ;
			if (pathName !== ""){
				var tab = pathName.split("/");
				for (var i = 0 ; i<tab.length ; i++){
					if (tab[i]){
						if (tab[i] in obj){
							obj = obj[tab[i]];
						}else{
							var txt = "IN PATTERN :" + pattern +" pathName :"+ pathName +" not defined" ;
							this.logger(txt,"ERROR")
								throw new Error(txt);
						}
					}
				}
			}
			if (templateName !== "" ){
				var name = this.getTemplateName(templateName);
				if (obj[name]){
					return obj[name];
				}else{
					var txt = "IN PATTERN :" + pattern +" MODULE :"+ moduleName +"  template : "+ templateName +" not defined" ;
					this.logger(txt,"ERROR")
						throw new Error(txt);	
				}
			}else{
				if (obj["index"]){
					return obj["index"];
				}else{
					var txt = "IN PATTERN :" + pattern +" MODULE :"+ moduleName +" default template not defined" ;
					this.logger(txt,"ERROR")
						throw new Error(txt);	
				}
			}
		}

		getView (name){
			return this.views[name];
		}

		boot (settings){
			this.logger("BOOT "+ this.name , "DEBUG");
			this.container = this.kernel.container.enterScope(this.name);
			this.notificationsCenter = stage.notificationsCenter.create(settings,this);
			this.set("notificationsCenter", this.notificationsCenter);
			this.router = this.kernel.router ;

			try {
				this.fire("onBoot", this);	
				this.reader();
				this.fire("onReady",this);
			}catch (e){
				this.logger("MODULE : "+ this.name +"  "+e, "ERROR");
				throw e;
			}
		}
	};

	stage.Module = Module; 
	return Module ;
};
