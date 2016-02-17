var React = require('react');
var ReactDOM = require('react-dom')

var withAnchorManager = require('../hoc/with-anchor-manager.jsx');

var Expander = React.createClass({
  propTypes: {
    head: React.PropTypes.node.isRequired
  },
  getInitialState: function() {
    return {
      expanded: false
    };
  },
  collapse: function() {
    this.setState({
      expanded: false
    });
  },
  expand: function() {
    this.setState({
      expanded: true
    });
  },
  handleAttractAttentionToAnchor: function() {
    this.expand();
    ReactDOM.findDOMNode(this.refs.header).focus();
  },
  handleMouseDown: function(e) {
    if (this.state.expanded) {
      this.collapse();
    } else {
      this.expand();
    }
  },
  handleKeyUp: function(e) {
    if (e.which === 9) {
      // We've just been focused via the keyboard. Toggling the content
      // is annoying to fiddle with via pure keyboard navigation, so just
      // expand our content and attract attention to it.
      this.props.attractAttention();
    }
  },
  render: function() {
    var className = "expand-div";
    if (this.state.expanded) {
      className += " expanded";
    }
    if (this.props.attractAttentionToAnchor) {
      className += " attract-attention";
    }
    return (
      <div className="expander-container">
        <div className={className}>
          <h4 ref="header" className="expander-header"
           id={this.props.anchorId}
           tabIndex="0" onKeyUp={this.handleKeyUp}
           onMouseDown={this.handleMouseDown}>
            {this.props.head}
          </h4>
          <div className="expander-items-container" onFocus={this.expand}>
            {this.props.anchorId
             ? <a className="expander-permalink"
                href={"#" + this.props.anchorId}
                title="Permalink to this section">&sect;</a>
             : null}
            <div className="items-margin">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = withAnchorManager(Expander);
