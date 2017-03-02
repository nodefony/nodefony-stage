const webpack = require('webpack');
const path = require('path');

var env = process.env.WEBPACK_ENV;



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
		
		rules: [
    			{
      				// "test" is commonly used to match the file extension
      				test: /\.js$/,

      				// "include" is commonly used to match the directories
      				
      				// "exclude" should be used to exclude exceptions
      				// try to prefer "include" when possible

      				// the "loader"
      				loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
				query: {
					presets: ['es2015'],
					//plugins: ['transform-runtime']
      				}
    			},
			{
                		test: /\.js$/, // include .js files
                		exclude: /node_modules/, // exclude any and all files in the node_modules folder
                		loader: "jshint-loader"
            		}
  		]
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery"
	},
	plugins: env === 'prod' ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	] : [
		new webpack.LoaderOptionsPlugin({
			test: /\.js$/, // optionally pass test, include and exclude, default affects all loaders
			exclude: /node_modules/,
			include: [
        			path.resolve(__dirname, "src")
      			],
			options: {
				// pass stuff to the loader
				// more options in the optional jshint object
    				jshint: {
					esversion: 5,
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
			}
		})
	]

}



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
		rules: [
			{
                		test: /\.js$/, // include .js files
                		exclude: /node_modules/, // exclude any and all files in the node_modules folder
                		loader: "jshint-loader"
            		}
  		]
	},
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery"
	},
	plugins: env === 'prod' ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true})
	] : [
		new webpack.LoaderOptionsPlugin({
			test: /\.js$/, // optionally pass test, include and exclude, default affects all loaders
			exclude: /node_modules/,
			include: [
        			path.resolve(__dirname, "src")
      			],
			options: {
				// pass stuff to the loader
				// more options in the optional jshint object
    				jshint: {
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
			}
		})
	]

}


const config = [/*ES5,*/ES6];
	

module.exports = config;
