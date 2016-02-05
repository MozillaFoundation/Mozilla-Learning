var React = require('react');
var ImageTag = require('../components/imagetag.jsx');
var Link = require('react-router').Link;

var Instructions = React.createClass({
  propTypes: {
    remixUrl: React.PropTypes.string.isRequired,
    nextActivityTitle: React.PropTypes.string.isRequired,
    nextActivityLinkName: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="madewithcode-instructions">
        <h2>Get started</h2>
        <ol>
          <li>
            {this.props.step1}
             <a href={this.props.remixUrl}>
              <ImageTag src1x="/img/pages/madewithcode/graphic_remix.png"
                      alt=""
                      width={245} />
            </a>
          </li>
          <li>
            {this.props.step2}
             <ImageTag src1x="/img/pages/madewithcode/graphic_thimble.png"
                      alt=""
                      width={245} />
          </li>
          <li>
            <p><strong>Done!</strong> Once you’re finished, you can save your work and share it. Log in and hit “Publish”.</p>
          </li>
        </ol>

        <h2>Go further</h2>
        <ul>
          <li>
            <p>Try the next Made with Code activity. Use your new HTML and CSS skills to <Link to={this.props.nextActivityLinkName}>{this.props.nextActivityTitle}</Link>.</p>
          </li>
          <li>
            <p>The Mozilla Learning Network has lots of other free <Link to="activities">activities</Link> as well.</p>
          </li>
        </ul>

      </div>
    );
  }
});

module.exports = Instructions;
