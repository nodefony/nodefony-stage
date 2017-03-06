module.exports =  function(stage){


	var defaultSettings = {
		delay: 0,
		async: false,
		
		ajax: {
			cache: true,
			dataType: 'json',
			type: 'GET',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
		}
	};
	
	var pollAction = function(ajaxConfig){
		ajaxConfig.data = this.data.get();
		this.transport = jQuery.ajax(ajaxConfig);
	};
	
	var pollling = function(ajaxConfig){
		
		if(this.settings.delay){
			this.timer = setTimeout(pollAction.bind(this, ajaxConfig), this.settings.delay);	
		} else {
			pollAction.call(this, ajaxConfig);
		}		
	};
	
	/*
 	 *
 	 *
 	 */
	var longPoll = class longPoll extends stage.io.transports.poll  {

		constructor(url, settings){
			super(url, settings);
			this.settings = stage.extend(true, {}, defaultSettings, settings);
		}

		start (){
			var ajaxConfig = this.buildAjaxSettings();
			this.transport = null;
			ajaxConfig.complete = (xhr, status) => {
				pollling.call(this, ajaxConfig);
			};
			pollling.call(this, ajaxConfig);
			return this;
		}

		stop (){
			this.transport.abort();
			this.transport = null;

			if(this.timer){
				clearTimeout(this.timer);
			}
			this.connectState = false;
			this.fire('onStop', this);
			return this;
		}
	}

	stage.io.transports.longPoll = longPoll ;
	return longPoll;
};
