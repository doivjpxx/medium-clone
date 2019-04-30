import React, { Component } from 'react'
import PostItem from '../../../../containers/pages/home/allPost/PostItem'

export default class PostAllPost extends Component {
  render() {
    return (
      <div>
        {/* begin post */}
        {this.props.listItem.allPost.map(item => (
          <PostItem item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
