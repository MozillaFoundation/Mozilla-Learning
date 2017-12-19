var React = require('react');
var Link = require('react-router').Link;
var ga = require('react-ga');
var OutboundLink = ga.OutboundLink;
var FormattedMessage = require('react-intl').FormattedMessage;
var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;

var HeroUnit = require('../../components/hero-unit.jsx');
var Illustration = require('../../components/illustration.jsx');
var IconLinks = require('../../components/icon-links.jsx');
var IconLink = require('../../components/icon-link.jsx');
var IconButtons = require('../../components/icon-buttons.jsx');
var IconButton = require('../../components/icon-button.jsx');

var config = require('../../config/config');

var CaseStudies = require('./CaseStudies.jsx');

var ModalEmail = require('./ModalEmail.jsx');
var ThankYouModal = require('./ThankYouModal.jsx');

var BlogSection = require('./BlogSection.jsx');

var fixLocation = require('../../lib/fix-location.js');

const HIDE_NEWSLETTER_SIGNUP_FORM = process.env.HIDE_NEWSLETTER_SIGNUP_FORM && process.env.HIDE_NEWSLETTER_SIGNUP_FORM.toLowerCase() === 'true';

var HomePage = React.createClass({
  statics: {
    pageClassName: 'home-page',
    BlogSection: BlogSection
  },
  contextTypes: {
    location: React.PropTypes.object,
    intl: React.PropTypes.object
  },
  componentWillMount: function() {
    fixLocation(this.context.location);
  },
  componentDidMount: function() {
    if (!HIDE_NEWSLETTER_SIGNUP_FORM && this.context.location.search.signup === "thanks") {
      this.props.showModal(ThankYouModal, {
        hideModal: this.props.hideModal
      });
      // Optimizely conversion tracking
      window.optimizely = window.optimizely || [];
      window.optimizely.push(['trackEvent', 'NewsletterFormSubmitted']);
    }
  },
  handleEmailBtnClick: function() {
    ga.event({ category: 'Clicked Home CTA', action: 'Get Email Updates' });
    this.props.showModal(ModalEmail, {
      hideModal: this.props.hideModal,
      sourceUrl: this.props.currentPath
    });
  },
  handleTeachBtnClick: function() {
    ga.event({ category: 'Clicked Home CTA', action: 'Teach an Activity' });
  },
  handleClubBtnClick: function() {
    ga.event({ category: 'Clicked Home CTA', action: 'Start A Mozilla Club' });
  },
  render: function() {
    return (
      <div>
        <HeroUnit>
          <h1><FormattedMessage id="MLN" /></h1>
          <IconButtons>
            { !HIDE_NEWSLETTER_SIGNUP_FORM &&
              <IconButton
                imgSrc="/img/pages/home/svg/icon-newsletter.svg"
                head={this.context.intl.formatMessage({id: 'get_email_update'})}
                onClick={this.handleEmailBtnClick}
                className={"newsletter"}
              />
            }
            <IconButton
              link="/activities"
              imgSrc="/img/pages/home/svg/icon-teachanactivity.svg"
              head={this.context.intl.formatMessage({id: 'teach_an_activity'})}
              onClick={this.handleTeachBtnClick}
            />
            <IconButton
              link="/clubs"
              imgSrc="/img/pages/home/svg/icon-startamozillaclub.svg"
              head={this.context.intl.formatMessage({id: 'start_a_mozilla_club'})}
              onClick={this.handleClubBtnClick}
            />
          </IconButtons>
        </HeroUnit>

        <div className="row deprecation-blurb">
          <div className="inner-container">
            <section>
              <h2><i className="fa fa-hand-o-right"></i> Important Update</h2>
              <p>Mozilla has made a strategic decision to sunset its local digital literacy programs including Hive and Mozilla Clubs over the course of 2017/2018. You have been, and will continue to be, leaders within this movement for Internet health, and Mozilla will continue to find ways to support you and concrete ways for people from our local communities to plug into this work. We will honor all current commitments to our grantee partners and donors. Content on this site, including curriculum and other resources, will continue to be available and archived here for your use. Visit <a href="https://foundation.mozilla.org">foundation.mozilla.org</a> for more information or contact <a href="mailto:mozillaclubs@mozillafoundation.org">mozillaclubs@mozillafoundation.org</a> with any further questions.</p>
            </section>
          </div>
        </div>

        <div className="inner-container">
          <section>
            <div className="about-us">
              <Illustration
                height={200} width={200}
                src1x="/img/pages/home/svg/icon-circle-home.svg"
                alt="">
                  <h2><FormattedMessage id='about_us' /></h2>
                  <p><FormattedHTMLMessage id='homepage_about_us_message' /></p>
              </Illustration>
            </div>
          </section>
          <section>
            <Illustration
              width={175}
              src1x="/img/pages/home/svg/MozFest-2016-Wordmark.svg"
              alt=""
              className="promo-banner">
                <p><FormattedMessage id="promo_message" /></p>
                <OutboundLink className="external-link" to={config.MOZFEST_SITE_LINK} eventLabel={config.MOZFEST_SITE_LINK}>{this.context.intl.formatMessage({ id: 'learn_more'})}</OutboundLink>
            </Illustration>
          </section>
          <section>
            <BlogSection/>
          </section>
        </div>

        <div className="row full-row quote">
          <section>
            <CaseStudies/>
          </section>
        </div>

        <div className="inner-container">
          <IconLinks>
            <IconLink
              link={config.TWITTER_LINK}
              imgSrc="/img/pages/about/svg/icon-twitter-blue.svg"
              width={60}
              head={this.context.intl.formatMessage({id: 'follow_us'})}
              subhead={this.context.intl.formatMessage({id: 'start_conv_on_twitter'})}
              highlightedText={this.context.intl.formatMessage({id: 'twitter'})}
            />
            <IconLink
              link={"mailto:"+config.TEACH_THE_WEB_EMAIL}
              imgSrc="/img/pages/about/svg/icon-get-help-blue.svg"
              head={this.context.intl.formatMessage({id: 'get_help'})}
              subhead={this.context.intl.formatMessage({id: 'email_us_anytime'})}
              highlightedText={this.context.intl.formatMessage({id: 'email_us'})}
            />
            <IconLink
              link="https://discourse.webmaker.org/t/if-youre-new-to-the-community-please-introduce-yourself"
              imgSrc="/img/pages/about/svg/icon-connect-blue.svg"
              head={this.context.intl.formatMessage({id: 'say_hello'})}
              subhead={this.context.intl.formatMessage({id: 'connect_on_discourse'})}
              highlightedText={this.context.intl.formatMessage({id: 'discourse_forum'})}
            />
          </IconLinks>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
