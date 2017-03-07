module.exports =  function(stage){

	'use strict';

		 
	var appKernel = class appKernel extends  stage.kernel  {

		constructor(url, environnement, settings){

			switch (arguments.length){
				case 0 :
					url = null ;
					environnement = "prod" ;
					settings = {} ;
				break;
				case 1 :
					environnement = url ;
					settings = {} ;
				break;
				case 2:
					settings = environnement;
					environnement = url;
					url = null ;
				break
			}
			super(environnement, settings);
			if ( url ){
				this.loadModule(url,{
					async:false
				});
			}else{
				this.fire("onBoot", this);
			}
		}
	};

	stage.appKernel = appKernel ;
	return appKernel ;
};
