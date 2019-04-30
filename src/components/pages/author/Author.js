import React, { Component } from 'react'
import AlertBar from '../../../containers/AlertBar'
import AuthorMeta from '../../../containers/pages/author/AuthorMeta'
import AuthorPost from '../../../containers/pages/author/AuthorPost';

export default class Author extends Component {
  render() {
    return (
      <div className='margtop3rem'>
        <AuthorMeta/>
        <AuthorPost/>
        <AlertBar/>
      </div>
    )
  }
}
