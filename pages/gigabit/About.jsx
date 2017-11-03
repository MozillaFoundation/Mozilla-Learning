var React = require('react');
var GigFoot = require('./GigFoot.jsx');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div className="clearfix">
          <div className="col-sm-4">
            <img className="w-100" src="/img/pages/gigabit/gigabit_fox.svg"/>
          </div>
          <div className="col-sm-8">
            <h2>What is Mozilla Gigabit?</h2>
            <p>The Mozilla Gigabit Community Fund provides grant funding in select U.S. communities to support pilot tests of gigabit technologies such as virtual reality, 4K video, artificial intelligence, and their related curricula. In so doing, our goal is to increase participation in technology innovation in support of a healthy Internet where all people are empowered, safe, and independent online.</p>
          </div>
        </div>

        <div className="col-8 mx-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/jRa4kB7LYoU" allowfullscreen></iframe>
          </div>
        </div>

        <div className="text-center">
          <h2>The Gigabit Approach</h2>
          <p>Our approach to taking gigabit discoveries out of the lab and into the field is threefold:</p>
        </div>

        <div className="m-b-3 clearfix">
          <div className="col-sm-4">
            <img className="w-100 p-a-3" src="/img/pages/gigabit/gigabit-icon_fund.svg"/>
            <h3>Fund and Support</h3>
            <p>We support the development of gigabit applications and associated curricula through the Gigabit Community Fund. Grants support pilots that take gigabit technologies out of the lab and into learning spaces in select cities across the United States.</p>
          </div>
          <div className="col-sm-4">
            <img className="w-100 p-a-3" src="/img/pages/gigabit/gigabit-icon_innovate.svg"/>
            <h3>Innovate and Spread</h3>
            <p>We catalyze the creation, adoption, and spread of these innovations through Hive Learning Networks. Hives are a local network of teachers, informal educators, technologists, and community members working together to advance the promise of the web for learning.</p>
          </div>
          <div className="col-sm-4">
            <img className="w-100 p-a-3" src="/img/pages/gigabit/gigabit-icon_grow.svg"/>
            <h3>Scale and Grow</h3>
            <p>We leverage Mozilla’s national networks to share these successes across Hive cities, other gigabit cities, and beyond. Our open innovation practices facilitate the adoption of gigabit technologies by diverse new communities of users.</p>
          </div>
        </div>

        <div className="m-b-3 text-center">
          <h2>Where are Mozilla Gigabit Cities</h2>
          <p>Get in touch with your local Gigabit Hive community</p>
        </div>

        <div className="clearfix text-center">
          <img className="img-responsive m-x-auto p-a-2" src="/img/pages/gigabit/map-v2.svg"/>
        </div>

        <div className="gigabit-contact-block">
          <div className="row">
            <div className="col-sm-4 gigabit-contact">
              <h4>Austin</h4>
              <p>Robert Friedman</p>
              <a className="glyph-link glyph-link-email" href="mailto:robert@mozillafoundation.org">robert@mozillafoundation.org</a>
              <a className="glyph-link glyph-link-twitter" target="_blank" href="https://twitter.com/HiveATX">@HiveATX</a>
            </div>
            <div className="col-sm-4 gigabit-contact">
              <h4>Chattanooga</h4>
              <p>Katie Hendrix</p>
              <a className="glyph-link glyph-link-email" href="mailto:katieh@mozillafoundation.org">katieh@mozillafoundation.org</a>
              <a className="glyph-link glyph-link-twitter" target="_blank" href="https://twitter.com/Hive_CHA">@Hive_CHA</a>
              <a className="glyph-link glyph-link-facebook" target="_blank" href="https://facebook.com/HiveCHA">facebook.com/HiveCHA</a>
            </div>
            <div className="col-sm-4 gigabit-contact">
              <h4>Kansas City</h4>
              <p>Janice Wait</p>
              <a className="glyph-link glyph-link-email" href="mailto:janice@mozillafoundation.org">janice@mozillafoundation.org</a>
              <a className="glyph-link glyph-link-twitter" target="_blank" href="https://twitter.com/HiveKC">@HiveKC</a>
            </div>
            <div className="col-sm-4 gigabit-contact">
              <h4>Eugene</h4>
              <p>Craig Wiroll</p>
              <a className="glyph-link glyph-link-email" href="mailto:craig@mozillafoundation.org">craig@mozillafoundation.org</a>
              <a className="glyph-link glyph-link-twitter" target="_blank" href="https://twitter.com/mozgig">@mozgig</a>
            </div>
            <div className="col-sm-4 gigabit-contact">
              <h4>Lafayette</h4>
              <p>Leah Ruffin</p>
              <a className="glyph-link glyph-link-email" href="mailto:leahr@mozillafoundation.org">leahr@mozillafoundation.org</a>
              <a className="glyph-link glyph-link-twitter" target="_blank" href="https://twitter.com/mozgig">@mozgig</a>
            </div>
          </div>
        </div>

        <div className="clearfix grey-block">
          <h2 className="m-b-3 text-center">Featured Updates</h2>

          <ul className="featured-updates row">
            <li className="col-sm-4">
              <div className="box">
                <h3>Blog</h3>
                <h1><a href="https://blog.mozilla.org/blog/2017/03/14/public-private-partnership-gigabit-innovation-internet-health/" target="_blank">A Public-Private Partnership for Gigabit Innovation and Internet Health</a></h1>
                <p>Mozilla, the National Science Foundation and U.S. Ignite announce $300,000 in grants for gigabit internet projects in Eugene, OR and Lafayette, LA</p>
                <a href="https://blog.mozilla.org/blog/2017/03/14/public-private-partnership-gigabit-innovation-internet-health/" target="_blank">Continue reading</a>
                <a className="secondary-button" href="https://blog.mozilla.org/blog/category/gigabit-fund/" target="_blank">See all blog posts</a>
              </div>
            </li>
            <li className="col-sm-4">
              <div className="box">
                <h3>Resources</h3>
                <h1><a href="https://github.com/MozillaFoundation/Gigabit-101-Workshop" target="_blank">Gigabit 101 Workshop</a></h1>
                <p>This workshop enables participants to understand what high-speed internet can do in a classroom or in general.</p>
                <a href="https://github.com/MozillaFoundation/Gigabit-101-Workshop" target="_blank">See the workshop</a>
                <a className="secondary-button" href="https://www.mozillapulse.org/search?keyword=gigabit">See all resources</a>
              </div>
            </li>
            <li className="col-sm-4">
              <div className="box">
                <h3>Projects</h3>
                <h1><a href="/gigabit/portfolio/raspberry-python-music-genie">Raspberry Python Music Genie</a></h1>
                <p>Local students are learning how to build their own air synthesizer by using Python coding languages and a Raspberry Pi. The resulting technology, Stage Genies, will be showcased by the Chattanooga Ballet at an event in downtown Chattanooga.</p>
                <a href="/gigabit/portfolio/raspberry-python-music-genie">Continue reading</a>
                <a className="secondary-button" href="/gigabit/portfolio">See all projects</a>
              </div>
            </li>
          </ul>
        </div>

        <GigFoot></GigFoot>
      </div>
    );
  }
});
