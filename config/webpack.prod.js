const webpack = require('webpack');
const path = require('path');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const transcode = {
  loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
  options: {
    presets: ['env'],
  }
};

const plugins = [
  new UglifyJSPlugin({
    uglifyOptions: {
      warnings: true,
      compress: true
    },
    parallel: true
  })
];

module.exports = function () {

  return [webpackMerge(commonConfig({
    env: ENV
  }), {
    output: {
      filename: 'stage.min.js',
    },
    module: {
      rules: [{
        use: [transcode]
      }]
    },
    plugins: plugins

  }), webpackMerge(commonConfig({
    env: ENV
  }), {

    output: {
      filename: 'stage6.min.js',
    },
    module: {
      rules: [{
        use: []
      }]
    },
    plugins: plugins
  })];
};
