//const webpack = require('webpack');
//const path = require('path');

switch (process.env.WEBPACK_ENV) {
case 'prod':
case 'production':
  module.exports = require('./config/webpack.prod.js')({
    env: 'production'
  });
  break;
case 'dev':
case 'development':
  module.exports = require('./config/webpack.dev.js')({
    env: 'development'
  });
  break;
default:
  module.exports = require('./config/webpack.dev.js')({
    env: 'development'
  });
}