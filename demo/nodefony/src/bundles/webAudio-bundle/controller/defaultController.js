/**
 *	@class defaultController
 *	@constructor
 *	@param {class} container
 *	@param {class} context
 *  @Route ("/mixer")
 */
module.exports = class defaultController extends nodefony.controller {

  constructor(container, context) {
    super(container, context);
    // start session
    this.startSession();
  }

  /**
   *    @Route ("",
   *      name="route-webAudio-bundle-webAudio")
   */
  indexAction() {
    return this.render("webAudio-bundle:mixer:mix.html.twig", {
      name: this.bundle.name,
      description: this.bundle.package.description
    });

  }
};
