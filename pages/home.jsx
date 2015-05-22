var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HeroUnit = require('../components/hero-unit.jsx');
var Blockquote = require('../components/blockquote.jsx');
var Illustration = require('../components/illustration.jsx');
var IconLinks = require('../components/icon-links.jsx');
var IconLink = require('../components/icon-link.jsx');

var CaseStudies = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
          <div>
            <Blockquote author="Maurya C. New York, United States"
                imgSrc="/img/pages/home/maurya-nyc.png" imgSrc2x="/img/pages/home/maurya-nyc@2x.png" imgAlt="Maurya NYC Quote">
              <p>"Web literacy is about more than coding - it's about how you can be a better web citizen."</p>
            </Blockquote>
          </div>
        </div>
      </div>
    );
  }
});

var BlogSection= React.createClass({
  render: function() {
    return (
      <div className="blog-section">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8">
            <h2>On the Blog</h2>
          </div>
        </div>
      </div>
    );
  }
});

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <HeroUnit image="/img/pages/home/hero-unit.png"
                  image2x="/img/pages/home/hero-unit@2x.png">
          <h1>The Mozilla Learning Network</h1>

        </HeroUnit>
        <div className="inner-container">
          <div className="about-us">
            <Illustration
              height={200} width={200}
              src1x="/img/pages/about/about-illustration.svg" src2x="/img/pages/about/about-illustration.svg"
              alt="">
                <h2>About Us</h2>
                <p>We want more people to see themselves as citizens of the web. Mozilla Learning Networks offers programs and a global community dedicated to helping people learn the most important skills of our age: <em>the ability to read, write and participate in the digital world.</em> <Link to="about" className="more">Learn more</Link></p>
            </Illustration>
          </div>
          <BlogSection/>
        </div>
        <div className="quote">
          <div className="inner-container">
            <CaseStudies/>
          </div>
        </div>
        <div className="inner-container">
          <IconLinks>
            <IconLink
              href="https://twitter.com/webmaker"
              imgSrc="/img/pages/about/svg/icon-twitter-blue.svg"
              imgAlt="twitter logo"
              head="Follow Us"
              subhead="Start a conversation on Twitter"
            />
            <IconLink
              href="mailto:teachtheweb@mozillafoundation.org"
              imgSrc="/img/pages/about/svg/icon-get-help-blue.svg"
              imgAlt="question mark icon"
              head="Get Help"
              subhead="Email us anytime"
            />
            <IconLink
              href="http://discourse.webmaker.org/category/meet"
              imgSrc="/img/pages/about/svg/icon-connect-blue.svg"
              imgAlt="illustration of two people connecting"
              head="Say Hello"
              subhead="Connect on the Discourse forum"
            />
          </IconLinks>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
