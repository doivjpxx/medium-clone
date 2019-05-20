import React, { Component } from 'react'
import AlertBar from '../../../containers/AlertBar'
import AuthorPost from '../../../containers/pages/author/AuthorPost';
import Editor from '../../../containers/pages/author/Editor'

export default class Author extends Component {
  render() {
    return (
      <div className='margtop3rem '>          
        {/* <img className="banner"  src={"https://hireindianprogrammers.com/wp-content/themes/hip/images/hip-home-page-banner.jpg"}/> */}
        <Editor/>
        <h1 className="sitetitle container"> My articles</h1>
        <AuthorPost />
        <AlertBar/>
      </div>
    )
  }
}
