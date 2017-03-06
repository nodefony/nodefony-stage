const webpack = require('webpack');
const path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var env = process.env.WEBPACK_ENV;

switch (process.env.WEBPACK_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod.js')({env: 'production'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev.js')({env: 'development'});
}
