/*
 *
 *	ENTRY POINT WEBPACK DEMO BUNLDE
 *
 *
 *  Add your assets here with require  to an integration in webpack  bundle
 *
 *  require('jquery');
 *  require('../css/mycss.css')
 *
 */
require('jquery');
const stage = require("../../../../../../src/core.js");
require('../css/demo.css');

module.exports = function () {
  window.stage = stage;
  /*
   *	Class
   *
   *	Namespace demo client side
   *
   */
  const demo = class demo {

    constructor() {}
  };

  return new demo();
}();