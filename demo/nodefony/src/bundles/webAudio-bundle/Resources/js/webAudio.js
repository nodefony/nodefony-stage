/*
 *
 *	ENTRY POINT
 *  WEBPACK bundle webAudio-bundle
 *  client side
 */
 // javascript bootstrap library
 import 'bootstrap';
 // bootstrap scss framework
 import '../scss/custom.scss';
 
import "../css/webAudio.css";
const stage = require("../../../../../../../src/core.js");
/*
 *	Class Bundle App
 */
class Webaudio  {
  constructor() {
    $(document).ready(() => {
      let mix = new mixer();
      mix.build($('.centered'));
      mix.start();

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
export default new Webaudio();
