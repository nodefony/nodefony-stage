const webpack = require('webpack');
const path = require('path');


var env = process.env.WEBPACK_ENV;

const config = {
	entry: path.resolve(__dirname, "src","core.js"),
	target:  'web' ,
	//watch: true,
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname,"dist") ,
		filename: env === 'prod' ? 'stage.min.js' : 'stage.js',
		library: 'stage',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery"
	},
	plugins: env === 'prod' ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	] : []
};

module.exports = config;
