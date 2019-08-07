/**
 *	The class is a **`webAudio` BUNDLE** .
 *	@module stage-starter
 *	@main stage-starter
 *	@class webAudioBundle
 *	@constructor
 *	@param {string} name
 *	@param {class} kernel
 *	@param {class} container
 *
 */
module.exports = class webAudioBundle  extends nodefony.Bundle {

  constructor (name, kernel, container){
    // Mother Class constructor
    super( name, kernel, container );

  // Load core bundle library
  //this.autoLoader.loadDirectory( path.resolve( this.path, "src" ) );

 /*
  *	If you want kernel wait webAudio event <<onReady>>
  *
  *      this.waitBundleReady = true ;
  */
  }
};
