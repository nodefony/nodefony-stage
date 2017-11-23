const webpack = require('webpack');
const path = require('path');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev


var transcode = {
  // the "loader"
  loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
  options: {
    presets: ['env']
  }
};

var jsint = {
  loader: "jshint-loader",
  options: {
    //modules: true
    esversion: 6,
    // any jshint option http://www.jshint.com/docs/options/
    // i. e.
    //camelcase: true,

    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: false,

    // custom reporter function
    reporter: function (errors) {
      for (var i = 0; i < errors.length; i++) {
        console.log(errors[i].id + " : " + errors[i].reason + " LINE : " + errors[i].line)
      }
    }
  }
};

var plugins = [];

module.exports = function (options) {

  return [webpackMerge(commonConfig({
    env: ENV
  }), {
    output: {
      filename: 'stage.js',
    },
    module: {
      rules: [{
        use: [ /*jsint ,*/ transcode]
      }]
    },
    plugins: plugins

  }), webpackMerge(commonConfig({
    env: ENV
  }), {
    output: {
      filename: 'stage6.js',
    },
    module: {
      rules: [{
        use: [ /*jsint*/ ]
      }]
    },
    plugins: plugins
  })];
};
