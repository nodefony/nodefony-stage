/*
 *
 *	ENTRY POINT WEBPACK BUNLDE
 *
 *
 *  Add your assets here with require to an integration in webpack  bundle
 *
 *  require('jquery');
 *  require('../css/mycss.css')
 *
 */
require("../css/webAudio.css");

module.exports = function() {

  /*
   *	Class
   *
   *	Namespace webAudio client side
   *
   */
  const webAudio = class webAudio {

    constructor() {
      var kernel = new stage.appKernel(null, "dev", {
        debug: true,
        location: {
          html5Mode: false
        },
        onLoad: function(kernel) {},
        onReady: function(kernel) {},
        onBoot: function(kernel) {},
        onDomLoad: function(kernel) {
          var mix = new mixer(kernel);
          mix.build($('.centered'));
          mix.start();
        }
      });
    }
  };

  return new webAudio();
}();