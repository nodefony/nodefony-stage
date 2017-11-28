'use strict';
module.exports = function (stage) {

  /*
   *
   *  CLASS USER
   *
   */
  const userSettings = {
    constraintsOffer: {
      mandatory: {
        'OfferToReceiveAudio': true,
        'OfferToReceiveVideo': true
      }
    },
    //constraintsOffer: stage.browser.Gecko ? {'mandatory': {'MozDontOfferDataChannel':true}} : null
    displayName: ""
  };

  const User = class User {

    constructor(userName, settings) {
      this.name = userName;

      this.settings = stage.extend(true, {}, userSettings, settings);

      this.displayName = this.settings.displayName || userName;

      this.audio = this.settings.constraintsOffer.mandatory.OfferToReceiveAudio;
      this.video = this.settings.constraintsOffer.mandatory.OfferToReceiveVideo;
      this.mediaStream = null;
      this.description = "";

    }

    createMediaStream(succesCallback, errorMedia) {
      this.mediaStream = new stage.media.mediaStream(null, {
        audio: this.audio,
        video: this.video,
        onSucces: succesCallback,
        onError: errorMedia
      });
      return this.mediaStream;
    }

    setDescription(desc) {
      this.description = desc;
    }
  };

  stage.extend(stage.media, {
    userMedia: User
  });
  return User;
};