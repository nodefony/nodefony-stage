module.exports =  function(stage){

	'use strict';


	/*
 	 *
 	 *	CLASS CONTROLLER
 	 *
 	 */
	var tabFxEvent = ["stage-click", "stage-dblclick", "stage-focus", "stage-blur", "stage-mouseover", "stage-mouseout", "stage-mouseenter", "stage-mouseleave", "stage-change"];

	var Controller = class Controller extends stage.Service{

		constructor(name, container, module){
			super(name, container, container.get("notificationsCenter") );
			this.module = module ; 
			this.i18n = this.kernel.i18n;
			this.router = this.kernel.router;
		}
		
		redirect (url){
			return this.router.redirect.apply(this.router, arguments)
		}

		/*
	 	*
	 	*
	 	*/
		forward (pattern, args){
			return this.router.forward(pattern, args)
		}

		/*
	 	*
	 	*
	 	*/
		generateUrl (name, variables, absolute){
			if (absolute === true){
				var url = this.router.url().split("#");
				absolute = this.router.url[0];
			}
			return this.router.generateUrl.apply(this.router, arguments);
		}

		evalInContext (js, context){
			var func = function(context) { 
				var $controller = context;
				return function(js){
					"use strict";
					return eval(js);
				}
			}(this);
			try {
				return func.call( context || this , jQuery.trim( js ));
			}catch(e){
				this.logger("DOM PARSER TWIG ERROR " + e, "ERROR");	
			}
		}


		domParser (domElement){
			domElement.find('[' + tabFxEvent.join('],[') + ']').each((index, ele) => {
				var attributes = ele.attributes;
				var jElement = $(ele);
				var ctrl = jElement.closest('[stage-ctrl]');
				var scope = null ;
				if(ctrl.length){
					var pattern = $(ctrl).attr("stage-ctrl") ;
					try {
						scope = this.router.resolvePattern(pattern).controller;
					}catch (e){
						this.logger("DOM PARSER ERROR : " + e , "ERROR")
						return ;
					}
				} else {
					scope = this;
				}
				for(var i = 0; i < attributes.length; i++){
					var attribute = attributes[i];
					if(tabFxEvent.indexOf(attribute.name) > -1){
						var ele = function(){
							var content = attribute.value;
							jElement.on(attribute.name.replace('stage-', ''), function(){
								scope.evalInContext(content, this);
							});
						}();
					}
				}
			});
		}

		/*
	 	*
	 	*
	 	*/
		render (element, partial, type){
			var ele = $(element);
			try {
				switch (type){
					case "append":
						ele.append(partial) ;
					break;
					case "prepend":
						ele.prepend(partial) ;
					break;
					default:
						ele.empty();
						ele.html(partial);

				}
				return this.domParser(ele);
			}catch(e){
				this.logger("DOM PARSER TWIG ERROR : "+e, "ERROR") ;
			}

		}

		renderPartial (pattern, obj){
			try {
				var template = this.module.getTemplatePattern(pattern);
				return template.render(obj);
			}catch(e){
				this.logger(e, "ERROR")
			}
		}
	};

	stage.Controller = Controller ;
	return Controller ;
};
