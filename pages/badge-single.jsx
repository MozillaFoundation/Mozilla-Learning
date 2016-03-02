'use strict';

var React = require('react'),
    SocialShare = require('../components/social-share.jsx'),
    BadgeHorizontalIcon = require('../components/badge-horizontal-icon.jsx'),
    RequirementsList = require('../components/requirement-list.jsx'),
    Badge = require('../components/badge.jsx'),
    BadgesAPI = require('../lib/badges-api'),
    Link = require('react-router').Link;

/**
 * Badges Navigation component
 */
var SingleBadgePageNavigation = React.createClass({
    propTypes: {
        nextNavigationDetails: function () {
            return React.PropTypes.object({
                url: React.PropTypes.string.isRequired,
                icon: React.PropTypes.string.isRequired,
                icon2x: React.PropTypes.string
            });
        },
        prevNavigationDetails: function () {
            return React.PropTypes.object({
                url: React.PropTypes.string.isRequired,
                icon: React.PropTypes.string.isRequired,
                icon2x: React.PropTypes.string
            });
        }
    },
    render: function () {
        var content = (
            <div className="single-badge-page-navigation">
                <div className="row">
                    <div className="col-xs-6">
                        <Link to={this.props.prevNavigationDetails.url} className="prev">
                            <div className="icon">
                                <Badge
                                    title="Previous"
                                    icon={this.props.prevNavigationDetails.icon}
                                    icon2x={this.props.prevNavigationDetails.icon2x}/>
                            </div>
                            <div className="text"><span className="fa fa-long-arrow-left"></span> Previous</div>
                        </Link>
                    </div>
                    <div className="col-xs-6 text-right">
                        <Link to={this.props.nextNavigationDetails.url} className="next">
                            <div className="text">Next <span className="fa fa-long-arrow-right"></span></div>
                            <div className="icon">
                                <Badge
                                    title="Next"
                                    icon={this.props.nextNavigationDetails.icon}
                                    icon2x={this.props.nextNavigationDetails.icon2x}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );


        
        return content;
    }
});

/**
 * Single badge Page
 * should take a badgeId
 */
var BadgePage = React.createClass({
    statics: {
        pageTitle: 'Badges',
        pageClassName: 'badges single-badge'
    },
    onQualificationsSubmit: function (event) {
        event.preventDefault();
        //console.log(event.nativeEvent.target);
    },
    handleFileSelect: function (event) {
        this.refs.optionalFile.getDOMNode().click();
    },
    componentDidMount: function(){
        var badgesInterface = new BadgesAPI(),
            _this = this,
            params = this.props.params;
        badgesInterface.getBadgeDetails(params.id, function( err , resp ){
            if( err ){
                //console.log('Error in fetch badge information');
            } else {
                _this.setState({
                    badge : _this.parseBadgeDetails(resp),
                    requirements : _this.parseBadgeCriteria(resp),
                });
            }
        })

    },
    parseBadgeDetails: function (data) {
        if( data.status == 200 && data.body && data.body.data ) {
            return {
                id: data.body.data.id || "",
                title: data.body.data.title || "",
                status: 'achieved',
                description: data.body.data.description || "",
                icon: data.body.data.image_url || "",
                icon2x: data.body.data.image_url || "",
            };
        } else {
            return {};
        }
    },
    parseBadgeCriteria: function(data ){
        if( data.status == 200 && data.body && data.body.data && data.body.data.criteria ) {
            return data.body.data.criteria.split(/\r?\n/);
        } else {
            return [];
        }
    },
    getInitialState: function () {
        return {
            badge: {
                id: "",
                title: "",
                status: '',
                description: "",
                icon: "",
                icon2x: "",
            },
            requirements: [],
            navigation: {
                next: {
                    url: '/badge/2',
                    icon: '/img/components/badge-icon/ProblemSolving.png',
                    icon2x: '/img/components/badge-icon/ProblemSolving@2x.png'
                },
                prev: {
                    url: '/badge/4',
                    icon: '/img/components/badge-icon/Creativity.png',
                    icon2x: '/img/components/badge-icon/Creativity@2x.png'
                }
            }
        };
    },
    render: function () {


        var badgeCriteria = "";
        if(this.state.requirements.length){
            badgeCriteria = (
                <div className="badge-requirement">
                    <h3 className={'text-light'}>Badge Requirements</h3>

                    <p>Make or write something that demonstrates your understanding of any two or more of the
                        following:</p>
                    <RequirementsList
                        list={this.state.requirements}
                        icon="fa fa-check"/>
                </div>
            );
        }

        return (
            <div>

                <div className="row top-back-navigation">
                    <div className="col-md-12">
                        <Link className="text-uppercase btn btn-link" to="/badges/"><span
                            className="fa fa-long-arrow-left"></span> Back to credentials</Link>
                    </div>
                </div>

                <BadgeHorizontalIcon
                    icon={this.state.badge.icon}
                    icon2x={this.state.badge.icon2x}
                    title={this.state.badge.title}
                    status={this.state.badge.status}
                    alt={this.state.badge.title}
                    description={this.state.badge.description}>
                    <div className="text-uppercase">21st century skills</div>
                    <h2 className="title">{this.state.badge.title}</h2>

                    <div className="description">{this.state.badge.description}</div>
                </BadgeHorizontalIcon>

                <div className="apply-congratulations">
                    <img src="/img/pages/badges/svg/divider.svg" alt="" className="center-block horizontal-divider"/>
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className={'text-light'}>Congrats, you were awarded this credential.</h3>
                        </div>
                        <div className="col-md-4 text-right">
                            <SocialShare />
                        </div>
                    </div>
                    <div className="badge-reward-text">
                        <div className="date">Sep 3,2015</div>
                        <div className="qualifications">I’ve earned this badge by working on this project:
                            www.websitepage.com. My project demonstrates an understanding of cultural awarness, which is
                            reflected in this part of the project: my journal entries of personal self-reflections
                            during group project.
                        </div>
                        <div className="attachment"><Link to='/myblog'>MyBlog.jpg</Link></div>
                    </div>
                    <img src="/img/pages/badges/svg/divider.svg" alt="" className="center-block horizontal-divider"/>
                </div>


                { badgeCriteria }

                <div className="apply-send-qualifications">
                    <p><strong className={'text-bold'}>Ideas?</strong> You could submit a blog post, a project you made
                        using Mozilla's tools, or another web creation you made. Demonstrate your understanding in your
                        own unique way!</p>
                    <h3 className={'text-light'}>Apply for this badge</h3>
                    <form className="horizontal-form" role="form" onSubmit={this.onQualificationsSubmit}>
                        <div className="form-group">
                            <label htmlFor="qualifications" className="control-label">What qualifies you to earn this
                                badge?</label>
                            <textarea
                                name="qualifications"
                                ref="qualifications"
                                id="qualifications"
                                cols="30"
                                rows="10"
                                className="form-control"
                                placeholder="I've earned this badge by working on this project: [link]. My project demonstrates an understanding of [skill/competency] through [explain further]."></textarea>
                        </div>

                        <div className="optional-file-input">
                            <input type="file" className="hidden" name="optional_file" id="optional_file"
                                   ref="optionalFile"/>
                            <button type="button" ref="optionalFileBtn" className="btn btn-link"
                                    onClick={this.handleFileSelect}>Add Optional Attachment(s)
                            </button>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-awsm">Apply</button>
                        </div>
                    </form>

                </div>
                <img src="/img/pages/badges/svg/divider.svg" alt="" className="center-block horizontal-divider"/>
                <div className="navigation">
                    <SingleBadgePageNavigation
                        nextNavigationDetails={this.state.navigation.next}
                        prevNavigationDetails={this.state.navigation.prev}/>
                </div>
            </div>
        );
    }
});

module.exports = BadgePage;
