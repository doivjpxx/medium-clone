 
import React, { Component } from 'react'
import SiteTitle from './SiteTitle'
import PostFeature from '../../../containers/pages/home/postFeature/PostFeature'
import PostAllPost from '../../../containers/pages/home/allPost/PostAllPost'


export default class Home extends Component {
  render() {
    return (
      <div className="container margtop3rem">
        <SiteTitle />
        {/* End Site Title================================================== */}
        {/* Begin Featured================================================== */}
        <section className="featured-posts">
          <div className="section-title">
            <h2>
              <span>Featured</span>
            </h2>
          </div>
          <div className="card-columns listfeaturedtag">
            {this.props.listUser.map(listItem => (
              <PostFeature listItem={listItem} key={listItem.id} />
            ))}
          </div>
        </section>
        {/* End Featured================================================== */}
        {/* Begin List Posts================================================== */}

        <section className="recent-posts">
          <div className="section-title">
            <h2>
              <span>All Stories</span>
            </h2>
          </div>
          <div className="card-columns listrecent">
            {/* begin post  post all post */}
            {this.props.listUser.map(listItem => (
              <PostAllPost listItem={listItem} key={listItem.id} />
            ))}

            {/* end post */}
          </div>
        </section>
        {/* End List Posts ================================================== */}
        {/* <AlertBar/>          */}
      </div>
    );
  }
}
