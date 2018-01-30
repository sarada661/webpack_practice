const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractTextPlugin = new ExtractTextPlugin('./css/main.css');

module.exports = [
	{
  entry:{
   'application': './source/es2015/application'
  },
  output: {
    path : __dirname + '/dist',
    filename : 'js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  resolve: {
		extensions: ['.js']
	}
	},
	{
  entry:{
   'main': './source/es2015/css/main.css'
  },
  output: {
    path : __dirname + '/dist',
    filename : 'css/[name].css',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractTextPlugin.extract('css-loader'),
      }
    ],
  },
	plugins: [extractTextPlugin],
	resolve: {
		extensions: ['.css']
	}
	}
];
