var webpack = require('webpack');

require('node-jsx').install();

var index = require('./lib/index-static.jsx');

module.exports = {
  entry: './lib/main.jsx',
  output: {
    path: __dirname + '/dist',
    filename: index.JS_FILENAME
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: "jsx-loader"}
    ]
  }
};
