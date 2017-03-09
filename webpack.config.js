module.exports = {
	context: __dirname + "/app",
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/public",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react']
		}]
	}
};
