var Twig = require("Twig");

module.exports =  function(stage){

	'use strict';


	var translate = {};


	var translateDispo = {
		fr_FR:"français",
		en_EN:"english"
	};

	var regNavLang = /(..)-?.*/;


	var service = class service extends stage.Service {

		constructor(kernel, container){
			super("I18N", container);
			this.logger("INITIALIZE I18N SERVICE", "DEBUG");

			this.container.setParameters("translate", translate);
			this.defaultDomain = this.trans_default_domain();
			var locale = navigator.language || navigator.userLanguage ;
			var res = regNavLang.exec(locale);
			if (res){
				locale = res[1]
				this.defaultLocale  = locale+"_"+locale.toUpperCase();
				translate[this.defaultLocale] = {};
			}else{
				this.defaultLocale = "fr_FR";	
			}

			this.listen(this, "onBoot",() => {
				this.boot();
			})	
		}

		
		boot (){
			//GET APP locale
			if ( this.kernel.modules.app &&  this.container.getParameters("module.app") )
				this.defaultLocale = this.container.getParameters("module.app").locale;

			if  ( ! translate[this.defaultLocale])
				translate[this.defaultLocale] = {};

			this.logger("DEFAULT LOCALE APPLICATION ==> " + this.defaultLocale ,"DEBUG");
			//this.logger("//FIXME LOCALE getLang in controller etc ..." ,"WARNING");
			if (Twig){
				Twig.extendFunction("getLangs", this.getLangs.bind(this));
				Twig.extendFunction("trans_default_domain", this.trans_default_domain.bind(this));
				Twig.extendFilter("trans", this.translation.bind(this));
				Twig.extendFunction("trans", this.translation.bind(this));
				Twig.extendFilter("getLangs", this.getLangs.bind(this));
			}
		}

		getLangs (locale, data){
			var obj = [];
			for ( var ele in translateDispo){
				obj.push({
					name:translateDispo[ele],
					value:ele
				})	
			}
			return obj;
		}


		registerI18n (name, locale, domain, data){
			if ( locale ){
				if( !translate[locale] )
					translate[locale] = stage.extend(true, {}, translate[this.defaultLocale]);	
			}
			if ( domain ){
				if( !translate[locale][domain] )
					translate[locale][domain] = stage.extend(true, {}, translate[this.defaultLocale][domain]);
				stage.extend(true, translate[locale][domain], data);		
			}else{
				stage.extend(true, translate[locale], data);	
			} 
		}

		trans_default_domain (domain){
			if ( ! domain ){
				return this.defaultDomain = "messages" ; 
			}
			return this.defaultDomain = domain ;
		}

		/*
 	 	*
 	 	*
 	 	*
 	 	*
 	 	*/
		translation (value, args){
			
			var defaulDomain = ( args && args[1] ) ? args[1] : this.defaultDomain ;
			var str = this.container.getParameters("translate."+this.defaultLocale+"."+defaulDomain+"."+value) || value;
			if (args){
				if (args[0]){
					for (var ele in args[0]){
						str = str.replace(ele, args[0][ele])
					}
				}
			}
			return str;
		}
	};

	stage.i18n = service ;

	return service;
};
