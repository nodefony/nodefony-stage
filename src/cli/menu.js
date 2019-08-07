const menu = [{
  type: 'list',
  name: 'stage',
  message: 'Stage CLI ',
  choices: ['Build Stage ES6 Tools Chain', "Run ES6 Tools Chain Tests", 'Install demo', "Run Demo"],
  filter: (val) => {
    switch (val) {
    case 'Build Stage ES6 Tools Chain':
      return "build";
    case 'Run Demo':
      return "demo";
    case 'Run ES6 Tools Chain Tests':
      return "test";
    case 'Install demo':
      return "install-demo";
    default:
      return val.toLowerCase();
    }
  }
}];

module.exports = menu;
