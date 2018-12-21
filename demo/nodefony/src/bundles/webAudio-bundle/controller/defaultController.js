/**
 *	@class defaultController
 *	@constructor
 *	@param {class} container
 *	@param {class} context
 *
 */
module.exports = class defaultController extends nodefony.controller {

  constructor(container, context) {
    super(container, context);
  }

  /**
   *
   *	@method indexAction
   *
   */
  indexAction() {
    try {
      return this.render("webAudio-bundle::index.html.twig", {
        name: "webAudio-bundle"
      });
    } catch (e) {
      throw e;
    }
  }

  /**
   *
   *	@method mixAction
   *
   */
  mixAction() {
    return this.render("webAudio-bundle:mixer:mix.html.twig");
  }


};