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
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader?minimize!postcss-loader"
      })
    }],
  },
	plugins: [extractTextPlugin],
	resolve: {
		extensions: ['.css']
	}
	}
];
