const path = require('path')

module.exports = {

	module: {
		rules: [
			{
				test: /\.coffee/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
							],
						},
					},
					{ loader: "coffee-loader" },
				],
			},
		],
	},

	entry: './source/public/index/script.coffee',
	output: {
		path: path.resolve(__dirname, 'public/static/index'),
		filename: 'script.js'
	},

	externals: {
		'react-dom': 'ReactDOM',
		react: 'React',
	},

}