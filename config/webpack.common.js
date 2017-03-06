const webpack = require('webpack');
const path = require('path');


module.exports = function (options) {
  	isProd = options.env === 'production';
  	return {

    		/*
     		 * The entry point 
     		 *
     		 * See: http://webpack.github.io/docs/configuration.html#entry
     		 */
    		entry: {
			main: path.resolve(__dirname, "../src","core.js")
    		},
		target:  'web' ,
		//watch: true,
		devtool: 'source-map',
    		output: {
			path: path.resolve(__dirname,"../dist"),
			library: 'stage',
			libraryTarget: 'umd'
    		},
		externals: {
		       // require("jquery") is external and available
		       //  on the global var jQuery
		       "jquery": "jQuery",
		       "twig": "Twig"
		},
    		/*
     		* Options affecting the resolving of modules.
     		*
     		* See: http://webpack.github.io/docs/configuration.html#resolve
     		*/
    		resolve: {
      			/*
       			* An array of extensions that should be used to resolve modules.
       			*
       			* See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       			*/
      			extensions: [ '.js', '.json', '.es6'],

      			// An array of directory names to be resolved to the current directory
      			modules: [path.resolve(__dirname, "src")],

    		},

    		/*
     		* Options affecting the normal modules.
     		*
     		* See: http://webpack.github.io/docs/configuration.html#module
     		*/
    		module: {

      			rules: [

        			/*
         			* Json loader support for *.json files.
         			*
         			* See: https://github.com/webpack/json-loader
         			*/
        			{
          				test: /\.json$/,
          				use: 'json-loader'
        			},

				/*
         			* to string and css loader support for *.css files (from Angular components)
         			* Returns file content as string
         			*
         			*/
        			{
          				test: /\.css$/,
          				use: ['to-string-loader', 'css-loader'],
          				exclude: []
        			},

				/*
         			* to string and sass loader support for *.scss files (from Angular components)
         			* Returns compiled css content as string
         			*
         			*/
        			{
          				test: /\.scss$/,
          				use: ['to-string-loader', 'css-loader', 'sass-loader'],
          				exclude: []
        			},

				/* Raw loader support for *.html
         			* Returns file content as string
         			*
         			* See: https://github.com/webpack/raw-loader
         			*/
        			{
          				test: /\.html$/,
          				use: 'raw-loader',
          				exclude: []
        			},

				/* 
         			* File loader for supporting images, for example, in CSS files.
         			*/
        			{
          				test: /\.(jpg|png|gif)$/,
          				use: 'file-loader'
        			},

        			/* File loader for supporting fonts, for example, in CSS files.
        			*/
        			{ 
          				test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          				use: 'file-loader'
        			}
      			],
    		},
    		/*
     		* Add additional plugins to the compiler.
     		*
     		* See: http://webpack.github.io/docs/configuration.html#plugins
     		*/
    		plugins: []
	}
}
