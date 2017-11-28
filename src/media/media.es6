const Adapter = require("webrtc-adapter");
module.exports = function (stage) {

  'use strict';

  // UDPATER
  let mediaStream = null;
  let getMediaStream = null;

  const updaterMedia = function () {
    // MediaStream	API
    try {
      if (stage.browser.Webkit) {

        getMediaStream = function (stream) {
          return URL.createObjectURL(stream);
        };

        mediaStream = webkitMediaStream;
        // The representation of tracks in a stream is changed in M26.
        // Unify them for earlier Chrome versions in the coexisting period.
        if (!webkitMediaStream.prototype.getVideoTracks) {
          webkitMediaStream.prototype.getVideoTracks = function () {
            return this.videoTracks;
          };
          webkitMediaStream.prototype.getAudioTracks = function () {
            return this.audioTracks;
          };
        }
        return true;
      }
      if (stage.browser.Gecko) {

        getMediaStream = function (stream) {
          return window.URL.createObjectURL(stream);
        };

        mediaStream = MediaStream;
        // Fake get{Video,Audio}Tracks
        if (!MediaStream.prototype.getVideoTracks) {
          MediaStream.prototype.getVideoTracks = function () {
            return [];
          };
        }
        if (!MediaStream.prototype.getAudioTracks) {
          MediaStream.prototype.getAudioTracks = function () {
            return [];
          };
        }
        return true;
      }
      if (stage.browser.Opera) {
        //getUserMedia = navigator.getUserMedia ;
        getMediaStream = function (stream) {
          return stream;
        };
        // Fake get{Video,Audio}Tracks
        if (!MediaStream.prototype.getVideoTracks) {
          MediaStream.prototype.getVideoTracks = function () {
            return [];
          };
        }
        if (!MediaStream.prototype.getAudioTracks) {
          MediaStream.prototype.getAudioTracks = function () {
            return [];
          };
        }
        return true;
      }
      console.error("Browser does not appear to be mediaStream-capable");
    } catch (e) {
      console.error(e);
    }
  }();

  /*
   *	MEDIA STREAM
   *
   *
   *
   *
   */
  const defaultSettingsStream = {
    audio: true,
    video: true
  };

  /*var attachMediaStream = function(){
		if (stage.browser.Webkit || stage.browser.Opera){
			return function(element){
				// Attach a media stream to an element.
				this.mediaElement = element;
				this.mediaElement.srcObject = this.stream ;
				//element.src = this.getMediaStream(this.stream);
				this.mediaElement.play();
			}
		}
		if (stage.browser.Gecko){
			return function(element){
				// Attach a media stream to an element.
				this.mediaElement = element;
				this.mediaElement.srcObject = this.stream ;
				//element.mozSrcObject = this.stream;
				this.mediaElement.play();
			}
		}
  	}();*/

  //FIXME
  /*var reattachMediaStream = function (){
		if (stage.browser.Webkit){
			return function(to){
				// reattach a media stream to an element.
				this.mediaElement.src = this.getMediaStream(this.stream);
				//to.src = this.mediaElement.src;
				this.mediaElement.play()
				//this.mediaElement = to;
			}
		}
		if (stage.browser.Gecko){
			return function(to){
				// reattach a media stream to an element.
				to.mozSrcObject = this.mediaElement.mozSrcObject;
				to.play();
				this.mediaElement = to;
			}
		}
  	}();*/

  const MediaStream = class mediaStream {

    constructor(mediaElement, settings) {
      this.settings = stage.extend({}, defaultSettingsStream, settings);
      this.notificationsCenter = stage.notificationsCenter.create(this.settings, this);
      this.urlStream = null;
      this.stream = this.settings.stream ? this.setStream(this.settings.stream) : null;
      this.mediaElement = mediaElement ? mediaElement : null;
      this.getMediaStream = getMediaStream;
    }

    getUserMedia(settings, success, error) {

      if (settings) {
        this.settings = stage.extend({}, defaultSettingsStream, settings);
        this.notificationsCenter.settingsToListen(settings);
      }
      return navigator.getUserMedia({
          video: this.settings.video,
          audio: this.settings.audio
        },
        (stream) => {
          this.setStream(stream);
          if (success) {
            success(this);
          }
          this.notificationsCenter.fire("onSucces", stream, this);
        },
        (e) => {
          if (error) {
            error(e);
          }
          this.notificationsCenter.listen(this, "onError");
        }
      );
    }

    setStream(stream) {
      this.stream = stream;
      this.urlStream = this.getMediaStream(stream);
      this.videotracks = this.getVideoTracks();
      this.audiotracks = this.getAudioTracks();
      return stream;
    }

    stop() {
      if (this.stream) {
        this.stream.stop();
      }
    }

    attachMediaStream(element) {
      this.mediaElement = element;
      this.mediaElement.srcObject = this.stream;
      //element.mozSrcObject = this.stream;
      this.mediaElement.play();
    }

    reattachMediaStream(stream) {
      this.stream = stream;
      this.attachMediaStream(this.mediaElement);
    }

    getVideoTracks() {
      return this.stream.getVideoTracks();
    }

    getAudioTracks() {
      return this.stream.getAudioTracks();
    }

    /*startRecording (stream){
    	var mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
    	console.log(mediaStreamSource);
    	mediaStreamSource.connect(this.audioContext.destination);
    	this.recorder = new Recorder(mediaStreamSource);
    }
    stopRecording (){
    	this.recorder.stop();
    	this.recorder.exportWAV((stream) => {
    		this.recordSource = window.URL.createObjectURL(stream);
    	});
    }*/
  };

  stage.extend(stage.media, {
    mediaStream: MediaStream,
  });

  return stage.media;
};