const path = require('path');


module.exports = {
	mode: 'development',
	entry: "./src/app.js", // by default its value is ./src/index.js
	output: {
		path: path.resolve(__dirname, 'public', 'scripts'),
		filename: "bundle.js"
	},
	module: {
		rules: [{ loader: 'babel-loader', test: /\.js$/, exclude: /node_modules/}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 8080
	}
}