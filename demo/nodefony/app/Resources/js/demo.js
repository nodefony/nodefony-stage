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
class Demo extends stage.Service {
  constructor() {
    super("DEMO");
    this.initSyslog();
    $(document).ready(() => {
      let md = new stage.media.mediaStream($("#myvideo").get(0));
      md.getUserMedia({}, (media) => {
        media.attachMediaStream();
        //media.getVideoTracks();
      });
      this.log("LOG DEMO INFO", "INFO");
      this.log("LOG DEMO ERROR", "ERROR");
      this.logger("LOG DEMO WARNING", "WARNING");
      this.logger("LOG DEMO DEBUG", "DEBUG");
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
