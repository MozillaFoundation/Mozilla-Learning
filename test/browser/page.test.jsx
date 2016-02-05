var should = require('should');
var sinon = window.sinon;
var React =require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;

var TestUtils = require('react-addons-test-utils');

var generator = require('../../lib/page-generate.jsx');
var Page = require('../../components/page.jsx');

var FakeModal = React.createClass({
  render: function() {
    return <div>I am a fake modal</div>;
  }
});

describe("page", function() {
  var handler, page, xhr, originalTitle;

  function visitPage(url, cb) {
    Router.run(generator.routes, url, function(Handler) {
      handler = TestUtils.renderIntoDocument(<Handler/>);
      page = TestUtils.findAllInRenderedTree(handler, function(c) {
        return !!c.showModal;
      })[0];
      cb();
    });
  }

  beforeEach(function() {
    xhr = sinon.useFakeXMLHttpRequest();
    originalTitle = document.title;
    handler = null;
    page = null;
  });

  afterEach(function() {
    if (handler) {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(handler).parentNode);
    }
    xhr.restore();
    document.title = originalTitle;
  });

  it("adds body.modal-open when modal is visible", function(done) {
    visitPage('/', function() {
      document.body.className.should.not.match(/modal-open/);
      page.showModal(FakeModal);
      document.body.className.should.match(/modal-open/);
      page.hideModal(FakeModal);
      document.body.className.should.not.match(/modal-open/);
      done();
    });
  });

  it("sets default page title when pageTitle is undefined", function(done) {
    visitPage('/', function() {
      page.componentDidUpdate(page.props, page.state);
      document.title.should.equal("Mozilla Learning");
      done();
    });
  });

  it("sets page title when pageTitle is a string", function(done) {
    visitPage('/fixme/', function() {
      page.componentDidUpdate(page.props, page.state);
      document.title.should.equal("[FIXME] - Mozilla Learning");
      done();
    });
  });

  // FIXME: TODO: dev-ribbon modal test
});
