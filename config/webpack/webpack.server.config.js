/**
 * This is the webpack configuration for generating the
 * learning.mozilla.org server-side library that is used
 * to generate static HTML for URI requests mapping to
 * individual pages in our app.
 */

var webpack = require('webpack');

var webpackConfig = {
  entry: __dirname + '/../../lib/build/server.library.jsx',
  devtool: 'source-map',
  target: 'node',
  externals: function(context, request, callback) {
    if (request[0] === '.' || request === webpackConfig.entry) {
      // bundle in relative script requires.
      callback();
    } else {
      // non-relative modules should rely on plain Node.js require().
      callback(null, 'commonjs ' + request);
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel',
          'document-env-vars'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
  ],
  output: {
    library: 'true',
    libraryTarget: 'commonjs2',
    path: __dirname + '/../../build',
    filename: 'server.library.js'
  }
};

module.exports = webpackConfig;
