const path = require('path')

module.exports = {

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
							],
						},
					},
					{
						loader: "ts-loader"
					},
				],
			},
		],
	},

	resolve: {
		extensions: ['.ts', '.tsx'],
	},

	entry: './src/index/script.tsx',
	output: {
		path: path.resolve(__dirname, 'public/static/index'),
		filename: 'script.js'
	},

}