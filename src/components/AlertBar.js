import React, { Component } from 'react'

export default class AlertBar extends Component {
  render() {
    return (
      <div className="alertbar margtop3rem">
        <div className="container text-center">
          <img src={require('../assets/img/logo.png')} alt="logo" /> &nbsp; Never miss a
        <b>story</b> from us, get weekly updates in your inbox.
        <button className="btn subscribe"  >Get Updates</button>
        </div>
      </div>
    );
  }
}
