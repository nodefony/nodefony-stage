const webAudioTask = require(path.resolve(__dirname, "webAudioTask.js"));

class webAudioCommand extends nodefony.Command {
  constructor(cli, bundle) {
    super("webAudio", cli, bundle);
    this.setTask("task", webAudioTask);
  }
}
module.exports = webAudioCommand;
