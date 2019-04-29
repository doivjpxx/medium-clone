import React, { Component } from 'react'
import AlertBar from '../../AlertBar'
import AuthorMeta from './AuthorMeta'
import AuthorPost from './AuthorPost';

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
