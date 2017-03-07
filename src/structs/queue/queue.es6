module.exports =  function(stage){

	'use strict';


	var defaultSettings = {
		type:"FIFO",	
		active:true
	};


	var codeError = {
		empty:0,
		notFound:1,
		stopped:2
	};

	/*
 	*
 	*
 	*
 	*  EVENTS QUEUE : 
 	*	onQueued(queue) :	// fire when add value to queue
 	*	onDeQueued(queue) :	// fire when add value to queue
 	*	onRunStart:(queue)	// fire when begin to run along the queue
 	*	onRunFinish:(queue)	// fire when finish to run along the queue
 	*	onError(queue, error, errorCode):	// fire when an error 
 	*
 	*  ERROR CODES :
 	*	0 : 	empty
 	*	1 :	notFound
 	*	2 :	stopped
 	*
 	*  SETTINGS : default
 	*	type : "FIFO"  // "LIFO"
 	*
 	*
 	*
 	*/
	var struct = class struct {

		constructor(localSettings){
			// Manage settings
			this.settings = stage.extend( true, {}, defaultSettings, localSettings);
			this.data = [];
			this.error= null;
			this.eventsQueue = stage.createEventsManager();
		}

		listen (context, eventName, callback){
			return this.eventsQueue.listen(context, eventName, callback);
		}
		
		// TODO LIFO
		enqueue (value){
			if (this.settings.active){
				var ret = this.data.push(value);
				this.eventsQueue.fireEvent("onQueued",this);
				return ret;
			}else{
				this.error = new Error("QUEUE is stoped");
				this.eventsQueue.fireEvent("onError",this, this.error, codeError.stopped);
				return null;
			}
		}
		
		
		remove (data){
			if (this.isEmpty()) {
				this.error = new Error("QUEUE is empty")
				this.eventsQueue.fireEvent("onError",this, this.error, codeError.empty);
				return null;
			}
			if (stage.array.contain(this.data, data) )
				return stage.array.remove(this.data, data)
			this.error = new Error(data+" Not found");
			this.eventsQueue.fireEvent("onError",this, this.error, codeError.notFound);
			return null;
		}

		// TODO LIFO
		dequeue (){
			if (this.settings.active){
				if (this.isEmpty()) {
					this.error = new Error("QUEUE is empty")
					this.eventsQueue.fireEvent("onError",this, this.error, codeError.empty);
					return null;
				}
				var value = this.data[0];
				stage.array.removeIndexOf(this.data,0);
				this.eventsQueue.fireEvent("onDeQueued",this);
				return value;
			}else{
				this.error = new Error("QUEUE is stoped")
				this.eventsQueue.fireEvent("onError",this, this.error, codeError.stopped);
				return null;
			}
		}

		peek (data){
			if (this.isEmpty()) {
				return null;
			}
			return this.data[0];
		}

		purge (){
			this.data.length = 0;
		}

		isEmpty (){
			return this.data.length === 0;
		}

		count (){
			return this.data.length;
		}

		getQueue () {
			return this.data;
		}

		start () {
			this.settings.active = true;
		}

		stop (){
			this.settings.active = false;
		}

		run (callback) {
			if (this.settings.active){
				this.eventsQueue.fireEvent("onRunStart",this);
				stage.each(this.data,callback)
				this.eventsQueue.fireEvent("onRunFinish",this);
			}else{
				this.error = new Error("QUEUE is stoped")
				this.eventsQueue.fireEvent("onError",this, this.error, codeError.stopped);
				return null;
			}
		}
	};



	var createStruct = function(localSettings){
		var Structs = new struct(localSettings);	
		Structs.eventsQueue.settingsToListen(localSettings)	
		if(Structs.error){			
			Structs.eventsQueue.fireEvent("onError", Structs, Structs.error);
			return Structs;
		}	
		return Structs;
	};

	var obj = {
		struct:struct,
		local:{
			createQueue:function(localSettings){
				if (! localSettings){
					localSettings = {};
				}
				return createStruct(localSettings);
			}
		}
	};

	stage.structs.queues = obj ;
	return obj;

};
