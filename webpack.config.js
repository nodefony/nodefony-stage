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

return ;




var transcode =  {
      	// the "loader"
      	loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
	query: {
		presets: ['es2015'],
		//plugins: ['transform-runtime']
      	}
};

var jsint = {
        loader: "jshint-loader",
	options:{
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
        	reporter: function(errors) { 
			for ( var i = 0 ; i< errors.length ; i++ ){
				console.log(errors[i].id + " : " + errors[i].reason  + " LINE : " +errors[i].line)
			}	
		}
	}
};


if ( env === 'prod' ){
	// https://github.com/webpack/webpack/issues/2545 for compress ES6
	var plugins = [ new webpack.optimize.UglifyJsPlugin({minimize: true})];
		/*new webpack.optimize.UglifyJsPlugin({
    			compress: {
      				warnings: true,
				drop_console: true,
    			},
  		})
	];*/
	var rulesES6 = [];

	var rulesES5 = [ transcode ];

}else{
	var plugins = [];

	var rulesES6 = [ jsint ];

	var rulesES5 = [ jsint , transcode ] ;
}



const ES5 = {
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
		rules: [{
			use:rulesES5
 		}]	
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery"
	},
	plugins: plugins
};


const ES6 = {
	entry: path.resolve(__dirname, "src","core.js"),
	target:  'web' ,
	//watch: true,
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname,"dist") ,
		filename: env === 'prod' ? 'stage6.min.js' : 'stage6.js',
		library: 'stage',
		libraryTarget: 'umd'
	},
	module: {
		rules: [{
			use:rulesES6
 		}]
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery",
		"twig": "Twig"
	},
	plugins: plugins
};


const config = [ES5, ES6];
	

module.exports = config;
