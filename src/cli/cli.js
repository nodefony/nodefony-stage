const nodefony = require("nodefony");
let package = require(path.resolve(__dirname, "..", "..", "package.json"));
let version = package.version;

const questions = require(path.resolve(__dirname, "menu.js"));

class Stage extends nodefony.cli {

  constructor() {
    super("nodefony-stage", {
      version: version,
    });
    this.start().catch(e => {
      this.log(e, "ERROR");
      throw e;
    });
  }

  start() {
    return super.start()
      .then(() => {
        this.showBanner();
        this.blankLine();
        let res = this.commander.arguments(`<cmd> [args...]`)
          .action((cmd, args) => {
            return this.initCommand(cmd, args);
          });
        if (!process.argv.slice(2).length) {
          return this.showMenu();
        }
        this.parseCommand(process.argv);
        return res;
      });
  }

  showMenu(noAscii = false, reload = false) {
    return this.runMenu(questions, noAscii, reload);
  }

  runMenu(menu, reload, noAscii) {
    return this.prompt(menu)
      .then((answers) => {
        return this.initCommand(answers.stage, null, noAscii);
      })
      .catch((e) => {
        this.logger(e, "ERROR");
        throw e;
      });
  }

  initCommand(cmd, args = null, noAscii = false) {
    if (!noAscii) {
      this.showAsciify(cmd)
        .then((data) => {
          this.showBanner(data);
          return this.runCommand(cmd, args);
        })
        .catch((e) => {
          this.logger(e, "ERROR");
          throw e;
        });
      return;
    }
    return this.runCommand(cmd, args);
  }

  runCommand(cmd, args = null) {
    if (cmd) {
      this.log(cmd, "INFO", "COMMAND");
    }
    switch (cmd) {
      case "build":
        return this.npm(["run", "build"])
          .then(() => {
            this.terminate(0);
          });
      case "install-demo":
        return this.npm(["run", "install-demo"])
          .then(() => {
            this.terminate(0);
          });
      case "demo":
        return this.npm(["run", "dev"], path.resolve("demo", "nodefony"))
          .then(() => {
            this.log("open bronser https://localhost:5152");
            //this.terminate(0);
          });
      case "test":
        return this.npm(["run", "test"])
          .then(() => {
            this.terminate(0);
          });
      default:
        return new Promise(() => {
          return this.npm(["run", "check"])
            .then(() => {
              this.log("open bronser https://localhost:5152");
              this.terminate(0);
            });
        });
        //console.log("passs")
        //return Promise.resolve();
    }
  }
}

module.exports = new Stage();
