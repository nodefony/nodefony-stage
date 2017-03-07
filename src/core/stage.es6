module.exports = function (jQuery){

	'use strict';

	var version = "0.0.1";

	// Traf indexOf IE8 
	var arrayProto = Array.prototype;

	var indexOf = function(){
		if (arrayProto.indexOf){
			return ;		
		}
		arrayProto.indexOf =  function( value, startIndex){
			var index = ( startIndex ) === null ? 0 : (startIndex < 0 ? Math.max(0, this.length + startIndex) : startIndex);
			for (var i = index; i < this.length; i++) {
				if (i in this && this[i] === value){
					return i;
				}
			}
			return -1;
		};
	}();

	var typeOf = function(value){
		var t = typeof value;
		if (t === 'object'){
			if (value === null ) {return "object";}
			if (value instanceof Array ||
				(!(value instanceof Object) &&
           				(Object.prototype.toString.call((value)) === '[object Array]') ||
           				typeof value.length === 'number' &&
           				typeof value.splice !== 'undefined' &&
           				typeof value.propertyIsEnumerable !== 'undefined' &&
           				!value.propertyIsEnumerable('splice')
          			)){
				return "array";
			}
			if (!(value instanceof Object) &&
          			(Object.prototype.toString.call((value)) === '[object Function]' ||
          				typeof value.call !== 'undefined' &&
          				typeof value.propertyIsEnumerable !== 'undefined' &&
          				!value.propertyIsEnumerable('call'))
			) {
        			return 'function';
      			}
			if (value.nodeType === 1 ){
				return "element";
			}
			if (value.nodeType === 9){
				return "document";
			}
			if (value === window){
				return "window";
			}
			if (value instanceof Date){
				return "date";
			}
			if (value.callee){
				return "arguments";
			}
			if (value instanceof SyntaxError){
				return "SyntaxError";
			}
			if (value instanceof Error){
				return "Error";
			}
		} else {
			if (t === 'function' && typeof value.call === 'undefined') {
    				return 'object';
			}
		}
  		return t;
	};

	var getBrowser = function(){
		if (navigator.userAgent.indexOf('MSIE') > -1){
			return "MSIE";
		}
		if (navigator.userAgent.indexOf('Firefox') > -1){
			return "Firefox";
		}
		if (navigator.userAgent.indexOf('Chrome') > -1){
			return "Chrome";
		}
		if (navigator.userAgent.indexOf('Safari') > -1){
			return "Safari";
		}
		if (navigator.userAgent.indexOf('Opera') > -1){
			return "Opera";
		}
		if (navigator.userAgent.indexOf('Iceweasel') > -1){
			return "Firefox";
		}
		return "undefined";
	}();

	var getBrowserVersion = function(){

		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			return parseInt(RegExp.$1, 10);
		}
		if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
			return parseInt(RegExp.$1, 10);
		}

		if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
		//if (/Chrome[\/\s](\d+\.\d+\.?\d+)/.test(navigator.userAgent))
			return parseInt(RegExp.$1,10);
		}

		if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
			if (/Version[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
				return parseInt(RegExp.$1,10);
			}
		}

		if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
			if (/Version[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
				return parseInt(RegExp.$1,10);
			}
		}

		if (/Iceweasel[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
			return parseInt(RegExp.$1, 10);
		}

		return "undefined"; 
	}();

	var useragent = navigator.userAgent.toLowerCase();

	/**
	 *	stage class   
	 *	The class is a **`stage client side `** .
	 *	@class stage
	 *	@constructor
	 *	@module library
	 *	
	 */
	var Stage = class Stage  {

		constructor(){
			this.version = version; 
			this.typeOf = typeOf ;
			this.extend = jQuery.extend ;
			this.crypto = {};
			this.modules = {};
			this.media = {};
			this.structs ={} ;
			this.controllers = {};
			this.browser = {
				navigator:getBrowser,
				version:getBrowserVersion,
				Ie:/msie/.test( useragent ) && !/opera/.test( useragent ),
				Gecko:navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') === -1,
				Webkit:/webkit/.test( useragent ),
				Opera:Object.prototype.toString.call(window.opera) === '[object Opera]',
				platform:navigator.userAgent.match(/ip(?:ad|od|hone)/) ? 'ios' : (navigator.userAgent.match(/(?:webos|android)/) || navigator.platform.toLowerCase().match(/mac|win|linux/) || ['other'])[0]
			};
		}

		register (name, closure){
			if (typeof closure === "function") {
				// exec closure 
				var register = closure(this, name);
			} else {
				var register = closure;
			}
			return this[name] = register;
		}

		registerModule (name, closure){
			return this.register.call(this.modules, name, closure);
		}

		registerController (name, closure){
			return this.register.call(this.controllers, name, closure);
		}

		basename (path) {
			return path.replace(/\\/g,'/').replace( /.*\//, '' );
		}

		dirname (path) {
			return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
		}

	};
	return  new Stage();
};
