import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container margtop3rem" style={{marginBottom:50}}>
                    <div className="footer">
                        <p className="pull-left">
                            Copyright © 2017 Your Website Name
                        </p>
                        <p className="pull-right">
                            Mediumish Theme by <a target="blank" href="https://www.wowthemes.net">Medium.com</a>
                        </p>
                        <div className="clearfix">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
