const webpack = require('webpack');
const path = require('path');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

const webpackMerge = require('webpack-merge'); // used to merge webpack configs

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev



var transcode =  {
      	// the "loader"
      	loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
	query: {
		presets: ['es2015'],
		//plugins: ['transform-runtime']
      	}
};


var plugins = [ new webpack.optimize.UglifyJsPlugin({minimize: true})];


module.exports = function (options) {

  	return [webpackMerge(commonConfig({env: ENV}), {
		output: {
			filename: 'stage.min.js',
		},
		module: {
		       rules: [{
			       use:[  transcode ]
 		       }]	
		},
		plugins: plugins

	}),webpackMerge(commonConfig({env: ENV}), {

		output: {
			filename: 'stage6.min.js',
		},
		module: {
			rules: [{
				use:[  ]
 			}]
		},
		plugins: plugins

	})];
};
