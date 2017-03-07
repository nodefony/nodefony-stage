module.exports =  function(stage){

	'use strict';


	var ea = function(){
		if (stage.browser.Ie){
			return function(callback){
				var iterator = 0;
				for (var key in this.data) {
					//if ( ! Array.prototype[key] ){
					if ( this.data.hasOwnProperty(key) ){
						var value = this.data[key]; 
						var pair = [key, value];
						pair.key = key;
						pair.value = value;
						callback(pair, iterator);
					}
					iterator++;
				}
			}
		}else{
			return function(callback){
				var iterator = 0;
				for (var key in this.data) {
					var value = this.data[key]; 
					var pair = [key, value];
					pair.key = key;
					pair.value = value;
					callback(pair, iterator);
					iterator++;
				}
			}
		}
	}();


	
	var struct = class struct {

		constructor(data){
			this.data = stage.typeOf(data) === "object" ? stage.extend(true, {}, data) : {} ;
		}


		get (key){
			if ((key === null) || (key === undefined)){
				return this.data;
			}
			if ( (key in this.data)){
				return this.data[key];
			}
			return false;
		}

		set (key, value){
			if ((key !== null) || (key !== undefined)){
				return this.data[key] = value;
			}
			return false;
		}

		unset (key){
			if (key in this.data){
				delete this.data[key];
				return true
			}
			return false;
		}

		hasKey (key){
			if (key in this.data){
				return true;
			}
			return false;
		}

		clear (){
			this.data = {};
			return true;
		}
		
		clone (){
			return stage.extend(true, {}, this.data);
		}

		//TODO
		inspect (){
			
		}

		//TODO
		keys (){
		}

		//TODO
		values (){
		}

		each (){
			return ea.apply(this, arguments);	
		}

		clone (){
			return  new struct(this.data);
		}

		toObject (key){
			return stage.extend(true, {}, this.data) ;
		}


		merge (hash){
			this.data = stage.extend(true, {}, this.data, hash) ;
		}

		toJson (key){
			if (key)
				return stage.json.stringify(this.get(key));
			return stage.json.stringify(this.data);
		}

		//TODO
		toQueryString (){

		}

	};

	var obj = {
		struct:struct,
		local:{
			createHash:function(data){
				return new struct(data);
			}
		}
	};

	stage.structs.hash = obj ;
	return obj;
};
