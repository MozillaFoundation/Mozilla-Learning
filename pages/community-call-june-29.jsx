var React = require('react');
var HeroUnit = require('../components/hero-unit.jsx');
// use this LinkAnchorSwap component for hyperlinks
var LinkAnchorSwap = require('../components/link-anchor-swap.jsx');
var Illustration = require('../components/illustration.jsx');

var CommunityCallPage = React.createClass({
  statics: {
    pageClassName: 'community-call',
    pageTitle: 'Community Call'
  },
  render: function () {
    return (
        <div className="inner-container call-container">
          <section className="intro intro-after-banner">
           <Illustration
             height={175} width={175}
             src1x="/img/pages/community/svg/icon-circle-community.svg"
             alt="icon toolkit">
               <h1>Mozilla Learning Community Call </h1>
               <h2>Join us to learn more about&mdash;and be inspired by&mdash;projects happening across our community. </h2>
           </Illustration>
          </section>

          <p>
            This monthly community call provides the opportunity to connect in real time with Mozilla and to ask questions and interact with others in our community who are doing their part to #teachtheweb.
          </p>

          <section className="callout-box past-workshop">
            <h2>Archived Call</h2>
            <p className="date">June 29, 1pm PT / 4pm ET / 8pm UTC</p>
            <h1>Learning and Making</h1>
            <p className="description">
              Featured Speakers: Lisa Kim, Youth Commission Director for Mikva Challenge in Chicago, IL; Niberca (Gigi) Polo, Emoti-con 2016 design fellows lead, Part-Time Associate Teaching Professor at Parsons The New School for Design, and Principal at Myellow Boots Studio; Dr. Dixie Ching, co-lead of the Hive Research Lab; Andy Forest, lead at STEAMLabs.
            </p>
          </section>

          <p>
            Summer learning loss is a real challenge, especially for those who may not have access to enriching educational opportunities. There has been a good amount of research and discussion on this topic, and on the June community call, we’ll be exploring the types of fun and engaging learning experiences that can–and do–happen during the summer. Educators from Hive NYC, Hive Chicago and Hive Toronto will join us to share real examples of programs that illustrate the impact that learning and making can have on young people during this critical time of the year.
          </p>

          <p>
            How do these summer programs Demystify the Web for young learners? Explore our learning space at the Mozilla Festival and how you can submit a proposal to share your program strategies and best practices with a community of like-minded peers in a professional learning environment that models hands-on, interest-driven learning for youth and adults alike.
          </p>

          <p>
            Viewers can ask questions and share ideas and feedback of their own through the embedded agenda and chat.
          </p>

          <h3>Workshop Video Stream</h3>

          <div className="video-wrapper">
            <iframe className="workshop-video" width="560" height="315" src="//www.youtube.com/embed/Uig7s0fChj8" frameBorder="0" allowFullScreen></iframe>
          </div>

          <h4>
            Open Agenda
            <a title="Open the agenda in a new tab" className="fa fa-external-link open-etherpad" href="https://public.etherpad-mozilla.org/p/mozcommunitycallJune16">
            </a>
          </h4>

          <iframe className="etherpad" src="https://public.etherpad-mozilla.org/p/mozcommunitycallJune16"></iframe>

        </div>
    );
  }
});

module.exports = CommunityCallPage;
