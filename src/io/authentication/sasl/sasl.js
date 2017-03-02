module.exports =  function(stage){
	
	var reg =/^([^=]+)=(.+)$/;
	var parserSasl = function(str){
		//console.log(str)
		var ret = str.replace(/"/g,"");
		var head = ret.split(",");
		var obj = {}
		for (var i= 0 ; i < head.length ; i++){
			var res = reg.exec(head[i])
			if (res && res[1])
				obj[res[1]] = res[2]
		}	
		return obj;
	};


	var Sasl = class Sasl  {

		constructor(url, method, headers, body){
			this.method = method;
			this.url = url;
			this.name = "sasl" ;
			this.headers = parserSasl(headers);
			this.body = body ;
			this.mechanisms = this.headers.mechanisms;
			var mechanism = this.getBestMechanism(this.mechanisms);
			if (mechanism){
				delete this.headers.mechanisms
					this.bestMechanism = mechanism.name
					this.mechanism = new mechanism.Class(this.url, this.method, this.headers, this.body);	
			}else{
				throw new Error("SALS mechanism not found")	
			}		
		}

		getBestMechanism (mechanism){
			var goodM = null;
			switch (typeof mechanism){
				case "object" :
					for (var i= 0 ; i < mechanism.length ; i++){
						if (mechanism[i] in stage.io.authentication.mechanisms){
							var goodM = stage.io.authentication.mechanisms[mechanism[i]];
							var name = mechanism[i];
							break;
						}
					}
					break;
				case "string" :
					//console.log(mechanism.split(" "));
					return this.getBestMechanism( mechanism.split(" ") );
					break;
				default:
					throw new Error("FORMAT SALS mechanism bad format")

			}
			return {
				name:name,
					Class:goodM
			}
		};

		getAuthorization (user, password){
			return  'SASL mechanism="'+this.bestMechanism+'",'+this.mechanism.generateAuthorization(user, password);
		}

	};

	stage.io.authentication.SASL = Sasl ;
	
	return Sasl ;

};
