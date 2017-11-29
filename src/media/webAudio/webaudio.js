const Adapter = require("webrtc-adapter");
module.exports = function (stage) {

  'use strict';

  let audioContext = null;

  const webAudioApi = function () {
    audioContext = window.AudioContext || window.webkitAudioContext;
    if (audioContext) {
      return true;
    }
    return false;
  }();

  /*
   *
   *
   *	MEDIA MIX
   *
   *
   */
  const mixSettings = {};

  const mediaMix = class mediaMix {

    constructor(settings) {

      this.audioBus = {};
      this.nbBus = 0;
      this.settings = stage.extend({}, mixSettings, settings);
      this.eventsManager = new stage.notificationsCenter.create(this.settings, this);

      this.createAudioBus("MASTER", {
        panner: true,
        analyser: true
      });
      this.masterBus = this.audioBus.MASTER;

      this.tracks = this.masterBus.tracks;
      this.audioContext = this.masterBus.audioContext;
      this.muted = this.masterBus.muted;
      this.panner = this.masterBus.audioNodes.panner;
      this.analyserLeft = this.masterBus.audioNodes.analyserLeft;
      this.analyserRight = this.masterBus.audioNodes.analyserRight;
      this.gain = this.masterBus.audioNodes.gain;

      this.connect(this.audioContext.destination);
    }

    listen() {
      return this.eventsManager.listen.apply(this.eventsManager, arguments);
    }

    unListen() {
      return this.eventsManager.unListen.apply(this.eventsManager, arguments);
    }

    fire() {
      return this.eventsManager.fire.apply(this.eventsManager, arguments);
    }

    createAudioBus(name, settings) {
      let bus = null;
      try {
        bus = new audioBus(name, this, settings);
      } catch (e) {
        throw e;
      }
      this.audioBus[name] = bus;
      this.nbBus++;
      bus.listen(this, "onCreateTrack", function (track, bus) {
        this.fire("onCreateTrack", track, bus, this);
      });
      bus.listen(this, "onRemoveTrack", function (track, bus) {
        this.fire("onRemoveTrack", track, bus, this);
      });
      return bus;
    }

    removeAudioBus(bus) {
      var ele = null;
      switch (true) {
      case bus instanceof audioBus:

        break;
      case typeof track === "number":
      case typeof track === "string":

        break;
      }
      if (!ele) {
        throw new Error("remove bus : this bus doesn't exist in  mixer  ");
      }
      return true;
    }

    connect(audioNode) {
      this.destination = audioNode;
      var ret = this.masterBus.connect(audioNode);
      this.fire("onConnect", audioNode, this);
      return ret;
    }

    disconnect() {
      this.masterBus.disconnect();
      this.destination = null;
      this.fire("onDisconnect", this);
    }

    setGain(value) {
      this.masterBus.setGain(value);
      return this;
    }

    getGain() {
      return this.masterBus.getGain();
    }

    mute() {
      this.masterBus.mute();
      this.muted = this.masterBus.muted;
      return this;
    }

    unmute() {
      this.masterBus.unmute();
      this.muted = this.masterBus.muted;
      return this;
    }

    createTrack(media, settings) {
      return this.masterBus.createTrack(media, settings);
    }

    removeTrack(track) {
      return this.masterBus.removeTrack(track);
    }

    playTracks(time, loop) {
      for (var i = 0; i < this.tracks.length; i++) {
        this.tracks[i].play(time, loop);
      }
    }

    createGain() {
      return this.audioContext.createGain();
    }

    createPanner() {
      return this.audioContext.createPanner();
    }

    createStereoPanner() {
      return this.audioContext.createStereoPanner();
    }

    createFilter() {
      return this.audioContext.createBiquadFilter();
    }

    createAnalyser() {
      return this.audioContext.createAnalyser();
    }

    createChannelSplitter(nbChannel) {
      return this.audioContext.createChannelSplitter(nbChannel);
    }

    createChannelMerger(nbChannel) {
      return this.audioContext.createChannelMerger(nbChannel);
    }

    createOscillator() {
      return this.audioContext.createOscillator();
    }
  };

  /*
   *
   *	CLASS AUDIOBUS
   *
   */
  const defaultAudioBusSettings = {
    panner: false,
    analyser: false
  };

  const audioBus = class audioBus {

    constructor(name, mixer, settings) {
      this.name = name;
      this.mixer = mixer;
      this.settings = stage.extend({}, defaultAudioBusSettings, settings);
      this.eventsManager = stage.notificationsCenter.create(this.settings, this);
      this.audioContext = new audioContext();
      this.tracks = [];
      this.nbTracks = 0;
      this.audioNodes = {};
      this.in = null;
      this.out = null;
      this.destination = null;
      this.muted = false;
      this.createNodes();
    }

    listen() {
      return this.eventsManager.listen.apply(this.eventsManager, arguments);
    }

    unListen() {
      return this.eventsManager.unListen.apply(this.eventsManager, arguments);
    }

    fire() {
      return this.eventsManager.fire.apply(this.eventsManager, arguments);
    }

    createNodes() {
      // mute
      this.audioNodes.mute = this.createGain();
      this.in = this.audioNodes.mute;

      // gain
      this.audioNodes.gain = this.createGain();
      this.in.connect(this.audioNodes.gain);
      this.out = this.audioNodes.gain;

      // analyseur stéreo
      if (this.settings.analyser) {
        this.audioNodes.splitter = this.createChannelSplitter(2);
        this.out.connect(this.audioNodes.splitter);
        this.audioNodes.analyserLeft = this.createAnalyser();
        this.audioNodes.analyserLeft.smoothingTimeConstant = 0.85;
        this.audioNodes.splitter.connect(this.audioNodes.analyserLeft, 0, 0);

        this.audioNodes.analyserRight = this.createAnalyser();
        this.audioNodes.analyserRight.smoothingTimeConstant = 0.85;
        this.audioNodes.splitter.connect(this.audioNodes.analyserRight, 1, 0);
      }

      // panoramique
      if (this.settings.panner) {
        this.audioNodes.panner = this.createStereoPanner();
        this.out.connect(this.audioNodes.panner);
        this.out = this.audioNodes.panner;
      }
    }

    connect(audioNode) {
      this.destination = audioNode;
      this.out.connect(audioNode);
      this.fire("onConnect", audioNode, this);
    }

    disconnect() {
      if (this.destination) {
        this.out.disconnect(this.destination);
        this.destination = null;
        this.fire("onDisconnect", this);
      }
    }

    setGain(value) {
      //this.audioNodes.gain.gain.value = value;
      this.audioNodes.gain.gain.setValueAtTime(value, this.audioContext.currentTime + 1);
      this.fire("onSetGain", value);
      return this;
    }

    getGain() {
      return this.audioNodes.gain.gain.value;
    }

    mute() {
      //this.audioNodes.mute.gain.value = 0;
      this.audioNodes.mute.gain.setValueAtTime(0, this.audioContext.currentTime + 1);

      this.muted = true;
      this.fire("onMute", this);
      return this;
    }

    unmute() {
      //this.audioNodes.mute.gain.value = 1;
      this.audioNodes.mute.gain.setValueAtTime(1, this.audioContext.currentTime + 1);
      this.muted = false;
      this.fire("onUnMute", this);
      return this;
    }

    createGain() {
      return this.audioContext.createGain();
    }

    createPanner() {
      return this.audioContext.createPanner();
    }

    createStereoPanner() {
      return this.audioContext.createStereoPanner();
    }

    createFilter() {
      return this.audioContext.createBiquadFilter();
    }

    createAnalyser() {
      return this.audioContext.createAnalyser();
    }

    createChannelSplitter(nbChannel) {
      return this.audioContext.createChannelSplitter(nbChannel);
    }

    createChannelMerger(nbChannel) {
      return this.audioContext.createChannelMerger(nbChannel);
    }

    createOscillator() {
      return this.audioContext.createOscillator();
    }

    createMediaStreamDestination() {
      var destination = this.audioContext.createMediaStreamDestination();
      this.disconnect();
      this.connect(destination);
      return destination;
    }

    createTrack(media, settings) {
      var track = new Track(media, this, settings);
      this.tracks.push(track);
      this.nbTracks++;
      this.fire("onCreateTrack", track, this);
      return track;
    }

    removeTrack(track) {
      let ele = null;
      let name = null;
      switch (true) {
      case track instanceof Track:
        for (let i = 0; i < this.tracks.length; i++) {
          if (this.tracks[i] === track) {
            name = track.name;
            track.pause();
            track.disconnect();
            // remove from tab
            ele = this.tracks.splice(i, 1);
            this.nbTracks--;
            this.fire("onRemoveTrack", ele[0], this);
            delete ele[0];
            break;
          }
        }
        break;
      case typeof track === "number":
      case typeof track === "string":
        name = track;
        for (let i = 0; i < this.tracks.length; i++) {
          if (this.tracks[i].name === name) {
            this.tracks[i].pause();
            this.tracks[i].disconnect();
            // remove from tab
            ele = this.tracks.splice(i, 1);
            this.nbTracks--;
            this.fire("onRemoveTrack", ele[0], this);
            delete ele[0];
            break;
          }
        }
        break;
      }
      if (!ele) {
        throw new Error("this track doesn't exist in  bus : " + this.name);
      }
      return true;
    }
  };


  /*
   *
   *	TRACK
   *
   *
   */
  const trackSettings = {
    gain: true,
    panner: true,
    filter: false,
    analyser: false,
    connect: true,
  };

  const Track = class Track {

    constructor(media, bus, settings) {
      this.media = media;
      this.bus = bus;
      this.settings = stage.extend({}, trackSettings, settings);
      this.audioNodes = {};
      this.audioBus = {};
      this.transport = null;
      this.context = bus.audioContext;

      this.source = null;
      this.buffer = null;
      this.out = null;
      this.in = null;

      this.name = this.settings.name;
      this.id = this.generateId();

      this.sync = 0;
      this.retry = 0;
      this.ready = false;
      this.muted = false;
      this.currentTime = 0;
      this.eventsManager = stage.notificationsCenter.create(this.settings, this);
      this.createNodes();

      if (this.settings.connect) {
        this.connect(this.bus.in);
      }

      this.listen(this, "onReady", function () {
        this.bus.mixer.fire('onReadyTrack', this.bus, this);
      });

      let type = stage.typeOf(media);
      let error = null;
      switch (type) {
      case "object":
        switch (true) {
        case media instanceof stage.media.mediaStream:
          this.mediaType = "stream";
          this.buffer = media.stream;
          this.url = stage.io.urlToOject(media.urlStream);
          this.ready = true;
          this.fire("onReady", this);
          break;
        case media instanceof AudioNode:
          this.mediaType = "audioNode";
          this.buffer = media;
          this.ready = true;
          this.fire("onReady", this);
          break;
        default:
          error = new Error("media type not allowed ");
          this.fire("onError", error);
          throw error;
        }
        break;
      case "element":
        this.mediaType = "element";
        /*this.media.onloadstart = () => {
        	console.log("loadstart");
        }
        this.media.onloadeddata = () => {
        	console.log("onloadeddata");
        }*/
        this.media.oncanplay = () => {
          this.connectSource(this.media);
          this.ready = true;
          this.fire("onReady", this);
        };
        break;
      case "string":
        this.url = stage.io.urlToOject(media);
        this.load(media);
        break;
      default:
        error = new Error("Track media type error");
        this.fire("onError", error);
        throw error;
      }
    }

    generateId() {
      return parseInt(Math.random() * 1000000000, 10);
    }

    setName(name) {
      this.name = name;
    }

    listen() {
      return this.eventsManager.listen.apply(this.eventsManager, arguments);
    }

    unListen() {
      return this.eventsManager.unListen.apply(this.eventsManager, arguments);
    }

    fire() {
      return this.eventsManager.fire.apply(this.eventsManager, arguments);
    }

    createNodes() {

      this.audioNodes.mute = this.bus.createGain();
      this.in = this.audioNodes.mute;
      this.out = this.audioNodes.mute;

      if (this.settings.gain) {
        this.audioNodes.gain = this.bus.createGain();
        this.out.connect(this.audioNodes.gain);
        this.out = this.audioNodes.gain;
      }
      if (this.settings.filter) {
        this.audioNodes.filter = this.bus.createFilter();
        this.out.connect(this.audioNodes.filter);
        this.out = this.audioNodes.filter;
      }

      if (this.settings.panner) {
        this.audioNodes.panner = this.bus.createStereoPanner();
        this.out.connect(this.audioNodes.panner);
        this.out = this.audioNodes.panner;
      }
      if (this.settings.analyser) {
        this.audioNodes.analyser = this.bus.createAnalyser();
        this.audioNodes.analyser.smoothingTimeConstant = 0.85;
        this.out.connect(this.audioNodes.analyser);
      }
    }

    setGain(value) {
      //this.audioNodes.gain.gain.value = value;
      this.audioNodes.gain.gain.setValueAtTime(value, this.context.currentTime + 1);
      this.fire("onSetGain", value);
      return this;
    }

    getGain() {
      return this.audioNodes.gain.gain.value;
    }

    mute() {
      //this.audioNodes.mute.gain.value = 0;
      this.audioNodes.mute.gain.setValueAtTime(0, this.context.currentTime + 1);
      this.muted = true;
      this.fire("onMute", this);
      return this;
    }

    unmute() {
      //this.audioNodes.mute.gain.value = 1;
      this.audioNodes.mute.gain.setValueAtTime(1, this.context.currentTime + 1);
      this.muted = false;
      this.fire("onUnMute", this);
      return this;
    }

    pause(when) {
      switch (this.mediaType) {
      case "element":
        this.media.pause();
        this.fire("onPause", this);
        break;
      default:
        if (this.source) {
          if (this.source.node && this.source.playbackState === this.source.node.PLAYING_STATE) {
            this.source.node.stop(when || 0);
          }
          this.disconnectSource();
          this.fire("onPause", this);
        }
      }
      return this;
    }

    play(time, loop) {
      switch (this.mediaType) {
      case "element":
        this.media.play();
        this.fire("onPlay", this);
        break;
      default:
        this.pause().connectSource();
        if (loop) {
          this.source.loop = true;
        }
        if (this.source.noteOn) {
          this.source.noteOn(this.context.currentTime, time);
        }
        if (this.source.start) {
          this.source.start(this.context.currentTime, time);
        }
      }
      this.fire("onPlay", this);
      return this;
    }

    connectSource() {
      this.source = this.createSource();
      this.source.connect(this.in);
    }

    disconnectSource() {
      this.source.disconnect(this.in);
      this.source = null;
      this.fire("onDisconnectSource", this);
    }

    connect(audioNode) {
      this.destination = audioNode;
      this.out.connect(audioNode);
      this.fire("onConnect", audioNode, this);
    }

    disconnect() {
      this.out.disconnect(this.destination);
      this.destination = null;
      this.fire("onDisconnect", this);
    }

    createSource(buffer) {
      //console.log(arguments);
      let source = null;
      switch (this.mediaType) {
      case "audioNode":
        source = buffer ||  this.buffer;
        break;
      case "video":
      case "audio":
        source = this.context.createBufferSource();
        source.buffer = buffer ||  this.buffer;
        break;
      case "decode":
        this.rawBuffer = buffer;
        this.urlStream = URL.createObjectURL(new Blob([this.rawBuffer]));
        this.context.decodeAudioData(buffer,
          (decoded) => {
            this.buffer = decoded;
            this.ready = true;
            this.fire("onReady", this);
          },
          (error) => {
            this.eventsManager.fire("onError", this, error);
            // only on error attempt to sync on frame boundary
            //if(this.syncStream()) this.createSource(type, buffer);
          }
        );
        break;
      case "stream":
        source = this.context.createMediaStreamSource(buffer ||  this.buffer);
        break;
      case "element":
        source = this.context.createMediaElementSource(this.media);
        break;
      }
      return source;
    }

    syncStream() {
      var buf8 = new Uint8Array(this.buffer);
      Uint8Array.prototype.indexOf = Array.prototype.indexOf;
      var i = this.sync,
        b = buf8;
      while (1) {
        this.retry++;
        //nodeGain
        i = b.indexOf(0xFF, i);
        if (i === -1 || (b[i + 1] & 0xE0 === 0xE0)) {
          break;
        }
        i++;
      }
      if (i !== -1) {
        var tmp = this.buffer.slice(i); //carefull there it returns copy
        delete(this.buffer);
        this.buffer = null;
        this.buffer = tmp;
        this.sync = i;
        return true;
      }
      return false;
    }

    load(url) {
      this.transport = new XMLHttpRequest();
      this.transport.open("GET", url, true);
      this.transport.responseType = "arraybuffer";
      this.transport.onload = () => {
        // Asynchronously decode the audio file data in request.response
        this.mediaType = "decode";
        this.createSource(this.transport.response);
        this.contentType = this.transport.getResponseHeader("content-type").split(";")[0];
        switch (this.contentType) {
        case (/audio\/.*/.test(this.contentType) ? this.contentType : null):
          this.mediaType = "audio";
          break;
        case (/video\/.*/.test(this.contentType) ? this.contentType : null):
          this.mediaType = "video";
          break;
        }
      };

      this.transport.onerror = () => {
        console.error('BufferLoader: XHR error');
      };

      this.transport.send();
    }
  };

  stage.extend(stage.media, {
    webAudioApi: webAudioApi,
    mediaMix: mediaMix,
    Track: Track,
    audioBus: audioBus
  });

  return stage.media;
};