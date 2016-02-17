var _ = require('underscore');
var React = require('react');
var ga = require('react-ga');
var OutboundLink = require('react-ga').OutboundLink;
var PureRenderMixin = require('react-addons-pure-render-mixin');

var config = require('../../config/config');

var LoginLink = React.createClass({
  mixins: [PureRenderMixin],
  propTypes: {
    origin: React.PropTypes.string,
    callbackSearch: React.PropTypes.string,
    action: React.PropTypes.string,
    loginBaseURL: React.PropTypes.string,
    callbackURL: React.PropTypes.string
  },
  contextTypes: {
    history: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      origin: config.ORIGIN,
      callbackSearch: '',
      action: 'signin'
    };
  },
  render: function() {
    var action = this.props.action;
    var callbackURL = this.props.callbackURL + this.props.callbackSearch;
    var href = this.props.loginBaseURL + '/auth/oauth2/authorize?callback=' + encodeURIComponent(callbackURL) + '&action=' + action;
    var props = _.extend({}, this.props, { to: href, eventLabel: href });
    if (process.env.NODE_ENV !== 'production' && !/^(signin|signup)$/.test(action)) {
      console.warn("unrecognized action: " + action);
    }
    return <OutboundLink {...props}>{this.props.children}</OutboundLink>;
  }
});

module.exports = LoginLink;
