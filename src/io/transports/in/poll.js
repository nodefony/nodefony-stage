module.exports =  function(stage){

	var defaultSettings = {
		delay: 1000,
		async : true,
		
		ajax: {
			cache: true,
			dataType: 'json',
			type: 'GET',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};

	var pollling = function(ajaxConfig){
		
		var tokenKey = (new Date()).getTime();
		ajaxConfig.data = this.data.get();
		var transport = jQuery.ajax(ajaxConfig);
		transport.tokenKey = tokenKey;
		this.transport[tokenKey] = transport;
	};
	
	/*
 	 *
 	 */
	var httpData = class httpData  {
		constructor(contentType, method){
			this.reset();
			if(contentType) {
				this.contentType = contentType;
			}
			if(method) {
				this.method = method;
			}
		}

		add (data, permanent){
			this[permanent ? "permanent" : "transient"] = data;
		}

		get (){

	    		var data = (this.transient ? this.transient : this.permanent);
	    		this.transient = '';
        		//return this.contentType.search('json') >= 0 && typeof(data) == 'object' && this.method.toUpperCase() != 'GET' ? JSON.stringify(data) : data;
	    		switch(this.contentType.split(';')[0].replace(/ /g, '')){
	    			case 'application/json':
	    			case 'text/json':
	    				if(this.method.toUpperCase() != 'GET' && typeof(data) == 'object'){
	    					data = JSON.stringify(data);
	    				} 
	    				break;
	    		}

	    		return data;
		}

		reset (){
	    		this.contentType = '';
	    		this.method = 'GET';
			this.permanent = '';
			this.transient = '';
		}

	};

	/*
	 *	EVENT :
	 *		onStart
	 *		onStop
	 *		onMessage
	 *		onError 
	 */
	var poll = class poll extends stage.io.transport  {

		constructor(url, settings){
			super(url, settings);
			this.settings = jQuery.extend(true, {}, defaultSettings, settings);
			this.data = new httpData(this.settings.ajax.contentType, this.settings.ajax.type);
			this.connectState = false;	
		}

		buildAjaxSettings (){

			var settings = jQuery.extend(true, {}, this.settings.ajax,{
				url: this.url.href,
			    crossDomain: this.crossDomain,
			    beforeSend: function(xhr){
				    if ( ! this.connectState){
					    this.fire.call(this, "onStart", this);
					    this.connectState = true;
				    }
			    }.bind(this),
			    success: function(data, state, xhr){
				    this.fire("onMessage", data , this, xhr);
			    }.bind(this),
			    error: function(xhr, status, error){
				    switch(status){
					    case 'abort':
						    this.fire("onAbort", error, this, xhr);	
						    break;

					    case 'timeout':
						    this.fire("onTimeout", error, this, xhr);	
						    break;

					    default:
						    this.fire("onError", error, this, xhr);
				    }
			    }.bind(this)
			});
			return settings;
		}

		start (){

			var ajaxConfig = this.buildAjaxSettings();

			this.transport = {};
			ajaxConfig.complete = function(xhr, status){
				if(this.transport[xhr.tokenKey]) delete this.transport[xhr.tokenKey];
			}.bind(this);
			pollling.call(this, ajaxConfig);
			this.idInterval = setInterval(pollling.bind(this, ajaxConfig), this.settings.delay);

			return this;
		}

		setData (data, permanent){
			this.data.add(data, permanent);
			return this;
		}

		stop (){

			if (Object.keys(this.transport).length > 0){
				for(var tokenKey in this.transport){
					this.transport[tokenKey].abort();
					delete this.transport[tokenKey];
				}
			}

			if(this.idInterval) {
				clearInterval(this.idInterval);
				this.idInterval = null;
			}

			this.connectState = false;

			this.fire('onStop', this);
			return this;
		}

		destroy (){
			this.close();
			return this;
		}
	};	
	
	stage.io.transports.poll = poll ;
	return poll;
};
