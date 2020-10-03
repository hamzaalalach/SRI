const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
	entry:['babel-polyfill','./src/js/index.js'],
	devtool: 'source-map',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use: {
					loader:'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			}
		]
	},
	plugins: [ new MiniCssExtractPlugin() ]
});
