/*
 *
 *	ENTRY POINT
 *  WEBPACK bundle demo
 *  client side
 */

const stage = require("../../../../../src/core.js");
require('../css/demo.css');

/*
 *	Class Bundle App
 */
class Demo {
  constructor() {
    $(document).ready(() => {
        let md = new stage.media.mediaStream($("#myvideo").get(0));
        md.getUserMedia({}, (media) => {
          media.attachMediaStream();
          //media.getVideoTracks();
        });
      });
    }
  }

  /*
   * HMR
   */
  if (module.hot) {
    module.hot.accept((err) => {
      if (err) {
        console.error('Cannot apply HMR update.', err);
      }
    });
  }
  export default new Demo();
