import React, { Component } from 'react'

export default class AuthorMeta extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8 col-md-offset-2">
                        <div className="mainheading">
                            <div className="row post-top-meta authorpage">
                                <div className="col-md-10 col-xs-12">
                                    <h1>Sal</h1>
                                    <span className="author-description">Founder of <a target="blank" href="https://www.wowthemes.net">WowThemes.net</a> and creator of <strong>"Mediumish"</strong> theme that you're currently previewing. I professionally develop premium themes, templates &amp; scripts since the Apocalypse (2012). You can reach me out on the social links below.</span>
                                    <div className="sociallinks"><a target="blank" href="https://www.facebook.com/wowthemesnet/"><i className="fa fa-facebook" /></a> <span className="dot" /> <a target="blank" href="https://plus.google.com/s/wowthemesnet/top"><i className="fa fa-google-plus" /></a></div>
                                    <a target="blank" href="https://twitter.com/wowthemesnet" className="btn follow">Follow</a>
                                </div>
                                <div className="col-md-2 col-xs-12">
                                    <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x" alt="Sal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}