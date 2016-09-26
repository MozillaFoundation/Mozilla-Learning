var request = require('superagent');
var config = require('../config/config');

var WORDPRESS_DOMAIN = config.WORDPRESS_DOMAIN;
var WORDPRESS_COM_API_ENDPOINT_BASE = 'https://public-api.wordpress.com/rest/v1.1/sites/' + WORDPRESS_DOMAIN + '/posts/slug:';

module.exports = function(path, callback) {
  // Sanitize the path, because we cannot trust what's been passed in
  // isn't a cleverly constructed URL to make WP fail in creative ways.

  // We only accept single word slugs. Anything else is an error.
  if (path.match(/[^a-zA-Z0-9-]/)) {
    console.warn(`Illegal stub path passed into wp-page-checker: ${path}.`);
    callback(true);
  }


  // FIXME: this is implemented based on the assumption that
  //        1) no multiple pages/posts on WP share the same slug
  //        2) the path passed here is not nested (e.g., doesn't have slash in it)
  var wpPostSlug = path;

  request
    .get(WORDPRESS_COM_API_ENDPOINT_BASE+wpPostSlug)
    .accept('json')
    .end(function(err, res) {
      var ifError;
      var content;

      if ( err || res.statusCode !== 200 ) {
        ifError = true;
      } else {
        content = JSON.parse(res.text).content;
      }

      callback(ifError, content);
    });
};
