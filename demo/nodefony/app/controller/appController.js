
/**
 *	@class appController
 *	@constructor
 *	@param {class} container
 *	@param {class} context
 */
module.exports = class appController extends nodefony.controller {

  constructor(container, context) {
    super(container, context);
    // start session
    this.startSession();
  }

/**
 *    @Route ("/",
 *      name="home")
 */
  indexAction() {
    let config = require(path.resolve(__dirname, "..", "..", "..", "..", "package.json"));
    return this.render("app::index.html.twig", {
      name: this.kernel.projectName,
			description: this.kernel.package.description,
      version: config.version    
    });

  }
};
