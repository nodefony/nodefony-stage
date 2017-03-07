module.exports =  function(stage){

	'use strict';

	var nativeHistory = !!(window.history && window.history.pushState );
	var PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/;
	var DEFAULT_PORTS = {'http': 80, 'https': 443};


	/*
 	 *	CLASS BROWSER
 	 *
 	 */

	var changeUrl = function(event){
		var cache = null ;
		var location = this.kernel.locationService ;
		var url = this.url();

		if ( ( url === this.lastUrl && url === this.location.href ) && this.lastUrl !== location.initialUrl){ 
			//console.log(" changeUrl PASS SAME")
			return;
		}

		if ( ! event ){
			this.kernel.logger(" FORCE URL CHANGE BROWER EVENT NOT FIRE" , "WARNING" );
			//console.log(location.url())
			var newUrl = location.url() ;
			this.kernel.notificationsCenter.fire("onUrlChange", newUrl , this.lastHash, url ,cache)
			this.lastUrlr= url;
			this.lastHash = newUrl ;
			return ;
		}
		//console.log("change URL :" + url +" IINIT "+location.initialUrl)
		//console.log("change LAST URL :" + this.lastUrl)
		var parse = location.parse(url);
		//console.log(location)
		if ( ! parse ){
			this.kernel.notificationsCenter.fire("onUrlChange", "", this.lastHash, url,  cache)
			this.lastUrl = "";
			this.lastHash = "";
			return ;
		}

		var newUrl = location.url() ;
		
		this.kernel.notificationsCenter.fire("onUrlChange", newUrl, this.lastHash , url ,cache)
		this.lastUrl = url;
		this.lastHash = newUrl ;
	};


	var myurl = function(options){
		if (nativeHistory && options.html5Mode){
			return function (url, replace, state) {
				//TODO
				/*if (this.location !== window.location) this.location = window.location;
				if (this.history !== window.History) this.history = window.History;

				if (url){
					this.kernel.logger(replace ? "REPLACE URL : " + url : "CHANGE URL : " + url,"WARNING")
						this.history[replace ? 'replaceState' : 'pushState'](state, '', url);
				}else{
					return this.location.href.replace(/%27/g,"'");	
				}*/
			}
		}else{
			return function (url, replace, state)  {
				if (url){
					if (this.kernel && this.kernel.get("location") )

					if (this.location !== window.location) this.location = window.location;
					var same = ( url === this.lastUrl && url === this.location.href ? true : false );
					if (this.history !== window.history) this.history = window.history;
					this.kernel.logger(replace ? "REPLACE URL : " + url : "CHANGE URL : " + url,"WARNING");
					if ( same ){
						if  (  url === this.kernel.locationService.initialUrl ){
								//FORCE changeUrl 
								changeUrl.call(this)
						}
						return url ;
					}
					//console.log(url)
					if ( replace ){
						this.location.replace(url);	
						return url ;
					}
					return this.location.href = url;				
				}else{
					return this.location.href.replace(/%27/g,"'");	
				}			
			}
		}	
	}; 

	var urlBrowser = null ;
	var browser = class browser {

		constructor(kernel, settings){
			this.location = window.location;
			this.history = window.History;
			urlBrowser = myurl.call(this, settings);
			this.lastUrl = this.url();
			this.kernel = 	kernel ;
			$(window).bind('hashchange', changeUrl.bind(this)); 
			//if (nativeHistory){
			//	$(window).bind('popstate', changeUrl.bind(this))
			//}
		}

		url (url, replace, state){
			return urlBrowser.call(this, url, replace, state);		
		}

	};



	/*
 	 *	CLASS LOCATION
 	 *
 	 */


	
	var beginsWith = function(begin, whole) {
  		if (whole.indexOf(begin) === 0) {
    			return whole.substr(begin.length);
  		}
	};

	var stripHash = function(url){
		var index = url.indexOf('#');
  		return index == -1 ? url : url.substr(0, index);
	};


	var Location = class Location  extends stage.Service {


		constructor(browser, base, kernel, settings){
			super("LOCATION", kernel.container, kernel.notificationsCenter );
			this.settings = settings
			this.browser = browser ;
			this.replace = false ;
			
			this.initialUrl = this.browser.url();
			this.base = base
			this.hashPrefix = "#"+this.settings.hashPrefix ;
			this.proto = this.stripFile(this.base);
			this.parseAbsoluteUrl(this.initialUrl);
			this.parse(this.initialUrl);
			this.logger("INITIALIZE LOCATION SERVICE", "DEBUG");

			// rewrite hashbang url <> html5 url
			//var abs = this.absUrl();
			//if ( abs != this.initialUrl) {
			//	this.browser.url(abs, true);
			//}
		}
		
		absUrl (){
			return this._absUrl ;
		}

		url (url){
			if (typeof url === "undefined")
				return this._url;
			var match = PATH_MATCH.exec(url);
			if (match[1]) this.path(decodeURIComponent(match[1]));
			if (match[2] || match[1]) this.search(match[3] || '');
			this.hash(match[5] || '');
		}

		protocol (){
			return this._protocol;	
		}

		host (){
			return this._host;	
		}

		port (){
			return this._port ;	
		}

		path (path){
			if (typeof path === "undefined"){
				return this._path ;
			}
			this._path = path ;
			try {
				this.change();
			}catch(e){
				this.logger(e,"ERROR");
				throw e
			}
			return this._path;
		}

		search (search){
			if (typeof search === "undefined"){
				return this._search ;
			}
			this._search = search ;
			try {
				this.change();
			}catch(e){
				this.logger(e,"ERROR");
				throw e
			}
			return this._search;

			
		}
		
		hash (hash){
			if (typeof hash === "undefined"){
				return this._hash ;
			}
			this._hash = hash ;
			try {
				this.change();
			}catch(e){
				this.logger(e,"ERROR");
				throw e
			}
			return this._hash;
		}	

		state (){
		
		}

		replace (value){
			if (value)
				return  this.replace = value ;	
			return this.replace ;
		}

		encodePath (path) {
  			var segments = path.split('/');
      			var i = segments.length;

  			while (i--) {
    				segments[i] = stage.io.encodeUriSegment(segments[i]);
  			}

  			return segments.join('/');
		}

		stripFile (url){
			return url.substr(0, stripHash(url).lastIndexOf('/') + 1);
		}
	
		// parsing end URL ex : http://domain.com:port(/path)(?search)(#hash)
		parseRelativeUrl (relativeUrl){
			//console.log("relative :" + relativeUrl)
			var prefixed = (relativeUrl.charAt(0) !== '/');
			if (prefixed) {
				relativeUrl = '/' + relativeUrl;
			}
			var resolve = stage.io.urlToOject(relativeUrl);
			//console.log(resolve)
			this._path = decodeURIComponent(prefixed && resolve.pathname.charAt(0) === '/' ?
				resolve.pathname.substring(1) : resolve.pathname);
			this._search = stage.io.parseKeyValue(resolve.search);
			this._hash = decodeURIComponent(resolve.hash);

			// make sure path starts with '/';
			if (typeof this._path !== "undefined" && this._path.charAt(0) != '/') {
				this._path = '/' + this._path;
			}
			//console.log("PATH:" + this._path)
		}

		// parsing begin URL ex : (http)://(domain.com):(port)
		parseAbsoluteUrl (absoluteUrl){
			var resolve = stage.io.urlToOject(absoluteUrl);
  			this._protocol = resolve.protocol.replace(":", "");
  			this._host = resolve.hostname;
  			this._port = parseInt(resolve.port, 10) || DEFAULT_PORTS[this._protocol] ||null;
		}
	};

	/**
 	 * LocationHashbangUrl represents url
 	 * This object is exposed as $location service when developer doesn't opt into html5 mode.
 	 * It also serves as the base class for html5 mode fallback on legacy browsers.
 	 *
 	 * @constructor
 	 * @param {string} appBase application base URL
 	 * @param {string} hashPrefix hashbang prefix
 	*/
	var LocationHashbangUrl = class LocationHashbangUrl extends  Location  {

		constructor(browser, base, kernel, settings) {
			super(browser, base, kernel, settings);
		}

		parse (url){
			//console.log("URL to parse LocationHashbangUrl  :" + url)
			//console.log("base : " + this.base)
			//console.log("beginsWith BASE : "+beginsWith(this.base, url))
			//console.log("beginsWith PROTO  :"+beginsWith(this.proto, url))
			var withoutBaseUrl = beginsWith(this.base, url) || beginsWith(this.proto, url);
			//console.log("withoutBaseUrl : " +withoutBaseUrl)
			var withoutHashUrl = withoutBaseUrl.charAt(0) == '#'
				? beginsWith(this.hashPrefix, withoutBaseUrl)
				: "";

    			if (typeof withoutHashUrl !== "string") {
				this.logger('Invalid url '+url+', missing hash prefix ' +this.hashPrefix , "ERROR");
      				return null; 
    			}
			//console.log("withoutHashUrl : " +withoutHashUrl)
    			this.parseRelativeUrl(withoutHashUrl);
			return this.change();
		}
		
		change (){
			var search = stage.io.toKeyValue(this._search);
			//console.log(this._search)
			//var hash = this._hash ? '#' + stage.io.encodeUriSegment(this._hash) : '';

			var hash = this._hash ? '#' + this._hash : '';

			//console.log(this._path)
			this._url = this.encodePath(this._path) + (search ? '?' + search : '') + hash		
			//console.log(this._url)
			//var temp = (this._url ? this.hashPrefix + this._url : '').replace("//","/");
			//this._absUrl = this.base + temp;	
			//console.log( this.hashPrefix)
			//console.log( this._url)
			this._absUrl = this.base + (this._url ? "#" + this._url : '');	
			//console.log("URL :"+ this._url)
			//console.log("HASH :"+ this._hash)
			//console.log("ABSURL :"+ this._absUrl)
			//console.log("PATH :"+ this._path)
			return this;
		}
	};


	/**
 	 * LocationHashbangInHtml5Url represents url
 	 * This object is exposed as location service when html5 history api is enabled but the browser
 	 * does not support it.
 	 *
 	 * @constructor
 	 * @param {string} appBase application base URL
 	 * @param {string} hashPrefix hashbang prefix
 	*/
	var LocationHashbangInHtml5Url = class LocationHashbangInHtml5Url extends  LocationHashbangUrl  {

		constructor(browser, base, kernel, settings){
			super(browser, base, kernel, settings);
		}

		parse (url){
			return this.change();
		}
		
		change(){
			return this;
		}
	};

	/**
 	 * LocationHtml5Url represents an url
 	 * This object is exposed as location service when HTML5 mode is enabled and supported
 	 *
 	 * @constructor
 	 * @param {string} appBase application base URL
 	 * @param {string} basePrefix url path prefix
 	*/
	var LocationHtml5Url = class LocationHtml5Url extends Location  {

		constructor (browser, base, kernel, settings) {
			super(browser, base, kernel, settings);
		}

		parse (url){
			var pathUrl = beginsWith(this.proto, url);
			if (pathUrl){
				this.parseRelativeUrl(pathUrl);
			}
			if (! this._path)
				this._path = "/"
			return this.change();
		}
		
		change (){
			var search = stage.io.toKeyValue(this._search);
			var hash = this._hash ? '#' + stage.io.encodeUriSegment(this._hash) : '';
			this._url = this.encodePath(this._path) + (search ? '?' + search : '') + hash;
			this._absUrl = this.proto + this._url.substr(1);
			return this
		}
	};


	/*
 	 *	SERVICE LOCATION
 	 */

	var defaultSettings = {
		html5Mode:true,
		hashPrefix:"/"
	};

	var serverBase = function (url) {
		return url.substring(0, url.indexOf('/', url.indexOf('//') + 2));
	};

	var service = function(kernel, settings){
	
		var options = $.extend(defaultSettings, settings)
			
		var browserService = new browser(kernel, options);
		kernel.set("browser", browserService);
		var initialUrl = browserService.url();
		var baseHref = options.base || "" ;
		var mode = null ;
		var base = null ;

		if (options.html5Mode) {
			mode = nativeHistory ? LocationHtml5Url : LocationHashbangInHtml5Url;
			base = serverBase(initialUrl) + (baseHref || '/');
		}else{
			mode = LocationHashbangUrl ;
			base = stripHash(initialUrl);
		}
		
		return new mode(browserService, base, kernel, options);
	}; 
	
	stage.location = service ;
	return service;
}
