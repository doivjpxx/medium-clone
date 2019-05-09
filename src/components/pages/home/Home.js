 
import React, { Component } from 'react'
import SiteTitle from './SiteTitle'
import PostItemFeature from '../../../containers/pages/home/postFeature/PostItem';
import PostItemAllPost from '../../../containers/pages/home/allPost/PostItem';
import { Link } from "react-router-dom";


export default class Home extends Component {
  componentWillMount(){
    this.props.listArticles();
  }
  render() {
   // console.log(this.props.list)
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
              {this.props.list.map(item => ( 
                <div>
                  <Link to={`/post/${item.id}`}>
                    <PostItemFeature item={item}/> 
                  </Link>          
                </div>
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
            
             {this.props.list.map(item => (
               <div>
                  <Link to={`/post/${item.id}`} 
                  
                  >
                    <PostItemAllPost item={item}/> 
                  </Link> 
              </div>
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
