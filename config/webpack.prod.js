//const webpack = require('webpack');
//const path = require('path');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      warnings: false,
      compress: true
    },
    parallel: true
  })
];

module.exports = function () {

  return [webpackMerge(commonConfig({
    env: ENV
  }), {
    mode: 'production',
    output: {
      filename: 'stage.min.js',
    },
    module: {
      rules: [{
        // BABEL TRANSCODE
        test: new RegExp("\.es6$|\.js$"),
        exclude: new RegExp("node_modules"),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      }]
    },
    plugins: plugins
  }), webpackMerge(commonConfig({
    env: ENV
  }), {
    mode: 'production',
    output: {
      filename: 'stage6.min.js',
    },
    plugins: plugins
  })];
};