import React, { Component } from 'react'
import PostItem from '../../../../containers/pages/home/postFeature/PostItem'
export default class PostFeature extends Component {
  render() {
    return (        
            <div>
                {/* begin post */}              
                {this.props.listItem.allPost.map((item)=><PostItem item={item} key={item.id}/>)} 
            </div>              
              
    )
  }
}
