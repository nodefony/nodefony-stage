const  Twig = require("twig");

module.exports =  function(stage){

	'use strict';
			
	/*
 	 *
 	 *	ROUTE
 	 *
 	 */

	var decode = function(str) {
		try {
			return decodeURIComponent(str);
		} catch(err) {
			return str;
		}
	};
	var Route = class Route {

		constructor(id, path, defaultParams){
			this.id = id ;
			this.path = path;
			this.template = null;	
			this.controller =null;
			this.defaults =  defaultParams;
			this.variables = [];
			this.pattern = this.compile();
		};

		compile (){
			var pattern = this.path.replace(/(\/)?(\.)?\{([^}]+)\}(?:\(([^)]*)\))?(\?)?/g, (match, slash, dot, key, capture, opt, offset) =>  {
				var incl = (this.path[match.length+offset] || '/') === '/';
				this.variables.push(key);
				return (incl ? '(?:' : '')+(slash || '')+(incl ? '' : '(?:')+(dot || '')+'('+(capture || '[^/]+')+'))'+(opt || '');
			});
			pattern = pattern.replace(/([\/.])/g, '\\$1').replace(/\*/g, '(.+)');
			this.pattern = new RegExp('^'+pattern+'[\\/]?$', 'i');
			return this.pattern ;	
		}

		match (url){
			var res = url.match(this.pattern);
			//console.log(res)
			if (!res) {
				return res;
			}
			var map = [];
			var tab = res.slice(1) ;
			for (var i = 0 ; i<tab.length; i++){
				var k = this.variables[i] || 'wildcard';
				var param = tab[i] && decode(tab[i]);
				//var index = map.push( map[k] ? [].concat(map[k]).concat(param) : param );
				var index = map.push( param )
				map[k] = map[index-1] ;

			}
			if ( map && map.wildcard) {
				map['*'] = map.wildcard;
			}
			return map;
		}
	};

	/*
 	 *
 	 *	RESOLVER
 	 *
 	 */
	var regModuleName = /^(.*)Module[\.js]{0,3}$/;
	var Resolver = class Resolver {

		constructor(container){
			this.container = container;
			this.resolve = false;
			this.kernel = this.container.get("kernel");
			this.defaultAction = null;
			this.defaultView = null;
			this.variables = new Array();
			this.router = this.container.get("router")
			this.browser = this.container.get("browser")
			//this.notificationsCenter = this.container.get("notificationsCenter") ;
		
		}

		match (route, url){
			var match = route.match(url); 
			if ( match ){
				this.variables = match;
				this.url = url;
				this.route = route;
				this.parsePathernController(route.defaults.controller)
			}		
			return match;
		}


		getModuleName (str){
			var ret = regModuleName.exec(str);
			if (ret){
				return  ret[1] ;
			}else{
				throw "BAD MODULE PATTERN ";
			}
		}

		getController (name){
			return this.module.controllers[name+"Controller"];
		}

		getAction (name){
			var ele = name+"Action" ;
			if ( ele in this.controller ){
				return this.controller[ele]
			}
			return null;
		}

		getDefaultView (controller, action){
			var res = this.module.name+"Module"+":"+controller+":"+action+".html.twig";
			return res ; 
		}

		parsePathernController (pattern){
			if (typeof pattern !== "string"){
				throw new Error("Resolver : pattern : "+pattern +" MUST be a string");	
			}
			this.route = this.router.getRouteByPattern(pattern);
			var tab = pattern.split(":")
			try {
				this.module = this.kernel.getModule( this.getModuleName(tab[0]) );
			}catch(e){
				throw new Error("Resolver pattern error module :  " + pattern + " : " +e );
			}
			if ( this.module ){
				this.controller = this.getController(tab[1]);
				if ( this.controller ){
					if (tab[2]){
						this.action = this.getAction(tab[2]);
						if (! this.action ){
							throw new Error("Resolver :In CONTROLLER: "+ tab[1] +" ACTION  :"+tab[2] + " not exist");
						}
					}else{
						this.action = null;	
					}
				}else{
					throw new Error("Resolver :controller not exist :"+tab[1] );
				}
				this.defaultView = this.getDefaultView(tab[1], tab[2] );
				this.resolve = true;
			}else{
				//this.logger("Resolver : not exist :"+tab[0] , "ERROR")
				throw new Error("Resolver : module not exist :"+tab[0] );
			}
		}
		
		callController (arg){
			try{
				var ret = this.action.apply(this.controller, arg || [])	
			}catch(e){
				this.controller.logger.call(this.controller, e, "ERROR");	
				throw e;
			}
			return ret;
		}
	};

	/*
	 *	ROUTER
	 */

	var cacheState = function(){
		var cacheState = window.history.state === undefined ? null : window.history.state;	
		return cacheState ;
	}

	var nativeHistory = !!(window.history && window.history.pushState );
	var regSerch = /(.*)\?.*$/;

	var service = class service  extends stage.Service {

		constructor(kernel, container){

			super("ROUTER", container );
			//this.kernel = kernel ;
			//this.container = container ;
			//this.notificationsCenter = this.container.get("notificationsCenter");
			//this.syslog = kernel.syslog ;	
			this.routes = {};
			this.routePattern = {};
			this.location = this.get("location");
			this.browser = this.get("browser");
			this.logger("INITIALIZE ROUTER SERVICE", "DEBUG");

			/*
 		 	* Extend Twig js	
 		 	*/
			Twig.extendFunction("path", (name, variables, host) => {
				try {
					if (host){
						return  this.generateUrl.call(this, name, variables, host);	
					}else{
						var generatedPath = this.generateUrl.call(this, name, variables, host);
						return generatedPath?"#"+generatedPath:"";
					}
				}catch(e){
					this.logger(e.error)
					throw e.error
				}
			});

			this.notificationsCenter.listen(this,"onUrlChange" , (url, lastUrl, absUrl ,cache) => {
				try{
					var res = this.resolve(url);
					if(! res.resolve ){
						this.forward("appModule:app:404");
						return ;
					}
					var last = this.resolveRoute(lastUrl) 
					if (last){
						this.notificationsCenter.fire("onRouteChange",{id:res.route.id, route:res.route, args:res.variables} ,{id:last.route.id, route:last.route, args:last.variables});
					}
				}catch (e){
					this.logger(e, "ERROR");
				}
			});
		}
		
		createRoute (id, path, defaultParams){
			if (id in this.routes ){
				this.logger("CREATE ROUTE : "+ id + "Already exist ", "ERROR");	
			}
			var route  = new Route(id, path, defaultParams);
			this.routes[id] = route;
			this.routePattern[this.routes[id].defaults.controller] = {
				route:this.routes[id],
 		        	path:path	
			}
			this.logger("CREATE ROUTE : "+ id, "DEBUG");
			return route ;
		}

		getRoute (name){
			if (this.routes[name])
				return this.routes[name];
			return null;
		}

		resolveRoute (url){
			var resolver = new Resolver(this.container);
			var res = [];
			for (var routes in this.routes){
				var route = this.routes[routes];
				try {
					res = resolver.match(route, url);
					if (res){
						return resolver ; 
					}
				}catch(e){
					continue ;
				}
			}
			return null;
		}
		
		resolve (url){
			//console.log("RESOLVE " +url)
			//console.log(regSerch.exec(url) );
			var test = regSerch.exec(url) ;
			if ( test )
				url = test[1] ;
			var resolver = new Resolver(this.container);
			var res = [];
			for (var routes in this.routes){
				var route = this.routes[routes];
				try {
					res = resolver.match(route, url);
					if (res){
						this.notificationsCenter.fire("onBeforeAction", url, resolver );
						var ret = resolver.callController( res)
						this.notificationsCenter.fire("onAfterAction", url, resolver, ret );
						break;
					}
				}catch(e){
					this.logger("RESOLVE URL : "+ url + " " + e,"ERROR")
					this.forward("appModule:app:500", [e]);
				}
			}
			return resolver;
		}

		getRouteByPattern (pattern, args){
			//console.log(pattern)
			//console.log(this.routePattern)
			if (pattern in this.routePattern){
				//console.log("FIND")
				var route = this.routePattern[pattern].route ;
				return route;
			}
				//console.log("NOT FIND")
			return null;
		};

		resolvePattern (pattern){
			var resolver = new Resolver(this.container);	
			var route = resolver.parsePathernController(pattern);
			return resolver;
		};

		forward (pattern, args){
			var resolver = this.resolvePattern(pattern);
			if (resolver.resolve){
				try {
					if (resolver.route){
						this.logger("FORWARD PATTERN : "+ pattern + "  FIND ROUTE ==> REDIRECT ","DEBUG")
						this.redirect(resolver.route.path);
						//this.location.url(resolver.route.path);
						//this.logger("FORWARD PATTERN : "+ pattern + " find ROUTE : "+resolver.route.path +" redirect to URL :" + this.location.absUrl(),"DEBUG")
						//this.browser.url(this.location.absUrl(), true);
					}else{
						this.logger("FORWARD PATTERN : "+ pattern + "  NO ROUTE FIND  ==> CALL CONTROLLER"  , "DEBUG")
						var ret = resolver.callController(args);	
					}
				}catch(e){
					this.logger("FORWARD "+ pattern +" CALL CONTROLER  "+ resolver.controller.name +" : "+e,"ERROR")
					this.forward("appModule:app:500", [e]);
				}
			}else{
				this.logger("Router Can't resolve : "+pattern ,"ERROR");
			}
			return false;	
		};
		
		redirect (url){
			this.location.url(url);
			this.logger("REDIRECT URL : "+ url  +" BROWSER  URL :" + this.location.absUrl(),"DEBUG")
			this.browser.url(this.location.absUrl() , true);
		};
			
		generateUrl (name, variables, host){
			var route =  this.getRoute(name) ;
			if (! route ){
				this.logger("no route to host  :"+ name, "WARNING")
				//throw {error:"no route to host  "+ name};
				return null ; 
			}
			var path = route.path;
			if ( route.variables.length ){
				if (! variables  ){
					var txt = "";
					for (var i= 0 ; i < route.variables.length ;i++ ){
						txt += "{"+route.variables[i]+"} ";
					}
					this.logger("router generate path route '"+ name + "' must have variable "+ txt, "ERROR")
					return null;
				}
				for (var ele in variables ){
					if (ele === "_keys") continue ;
					var index = route.variables.indexOf(ele);
					if ( index >= 0 ){
						path = path.replace("{"+ele+"}",  variables[ele]);
					}else{
						this.logger("router generate path route '"+ name + "' don't  have variable "+ ele, "WARNING")
						return null;
					}	
				}	
			}
			if (host){
				return host+"#"+path ;
			}
			return path ;
		}
	};

	stage.router = service ;
	return service ; 

};
