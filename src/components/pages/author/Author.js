import React, { Component } from 'react'
import AlertBar from '../../../containers/AlertBar'
import AuthorMeta from '../../../containers/pages/author/AuthorMeta'
import AuthorPost from '../../../containers/pages/author/AuthorPost';
import Editor from '../../../containers/pages/author/Editor'
import RelatedPost from '../../../containers/pages/post/RelatePost'

export default class Author extends Component {
  render() {
    return (
      <div className='margtop3rem container'>
       <h1 className="sitetitle">Adventure is the best way to learn</h1>
      <p className="lead">
                  You’ll never be brave if you do not get hurt. You’ll never learn if you do not make mistakes. You’ll never be successful if you do not encounter failure. 
                    <img style={{marginTop:50}} src={"https://hireindianprogrammers.com/wp-content/themes/hip/images/hip-home-page-banner.jpg"}/>
                  </p>
        <Editor/>
        <AuthorMeta/>
         <AuthorPost/>
        <AlertBar/>
        {/*<RelatedPost/>*/}
      </div>
    )
  }
}
