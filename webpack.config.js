var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    index: ['./source/javascripts/index.js']
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './source/javascripts')
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  devtool: 'source-map'
};
