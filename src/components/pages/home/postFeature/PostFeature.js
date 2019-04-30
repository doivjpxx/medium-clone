<<<<<<< HEAD
import React, { Component } from 'react'
import PostItem from '../../../../containers/pages/home/postFeature/PostItem'
=======
import React, { Component } from "react";
import PostItem from "../../../../containers/home/postFeature/PostItem";
>>>>>>> 267486200b5c9399654412e84c8f1fc4e224f1a6
export default class PostFeature extends Component {
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
