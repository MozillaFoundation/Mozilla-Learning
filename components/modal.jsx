var React = require('react/addons');

var ModalManagerMixin = require('../mixins/modal-manager');

var Modal = React.createClass({
  mixins: [React.addons.PureRenderMixin, ModalManagerMixin],
  propTypes: {
    modalTitle: React.PropTypes.string
  },
  componentDidMount: function() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.getDOMNode().focus();
  },
  componentWillUnmount: function() {
    document.removeEventListener('keydown', this.handleKeyDown);
  },
  handleOutsideOfModalClick: function(e) {
    if (e.target === this.getDOMNode()) {
      this.hideModal();
    }
  },
  handleKeyDown: function(e) {
    if (e.which == 27) {
      this.hideModal();
    }
  },
  render: function() {
    return (
      <div className="modal show"
       tabIndex="-1"
       role="dialog"
       aria-labelledby="modal-label"
       onClick={this.handleOutsideOfModalClick}>
        <div className="modal-dialog">
          <div className="modal-header">
            <button type="button" className="close"
             aria-label="Close"
             onClick={this.hideModal}>
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-title" id="modal-label">
              {this.props.modalTitle}
            </div>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
