var webpack = require('webpack');

module.exports = {
	devServer: {
		inline: true,
		contentBase: './public',
		port: 8080
	},
	entry: './app/index.js',
	output: {
		path: 'public'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};
