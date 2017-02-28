const webpack = require('webpack');
const path = require('path');


var env = process.env.WEBPACK_ENV;

const config = {
	entry: path.resolve(__dirname, "webpack","app.js"),
	target:  'web' ,
	//watch: true,
	output: {
		path: path.resolve(__dirname,"public") ,
		filename: env === 'prod' ? 'stage.min.js' : 'stage.js',
		//library: 'stage',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{test: /\.(js|jsx)$/, use: 'babel-loader'}
		]
	},
	plugins: env === 'prod' ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	] : []
};

module.exports = config;
