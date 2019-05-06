import React, { Component } from 'react'
import LefShare from '../../../containers/pages/post/LeftShare'
import Article from '../../../containers/pages/post/Article'
import RelatedPost from '../../../containers/pages/post/RelatePost'
import AlertBar from '../../AlertBar';
export default class Post extends Component {
  render() {
    return (
      <div className="container margtop3rem">
        <div className="row">       
          {/* Begin Fixed Left Share */}      
          <LefShare />
          {/* Begin Post */}
          <Article />
        </div>
        <div className="hideshare">
        </div>
        <RelatedPost />
        <AlertBar />
      </div>
    )
  }
}
