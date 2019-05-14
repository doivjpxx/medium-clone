import React, { Component } from 'react'
import SiteTitle from './SiteTitle'
import PostItemFeature from '../../../containers/pages/home/postFeature/PostItem';
import PostItemAllPost from '../../../containers/pages/home/allPost/PostItem';
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      page:1
    }
    this.renderpage=this.renderpage.bind(this)
    this.renderNextPage=this.renderNextPage.bind(this)
  }
  componentWillMount(){
    this.props.listArticles(this.state.page);
    this.props.topArticle ();
  }
  renderpage(value){ 
      this.setState({page:value})
      this.props.listArticles(value)
    }
  renderNextPage(){   
    this.props.listArticles(this.state.page+1)
    this.setState({page:this.state.page+1})
  }
  render() {
    console.log(this.state.page)
    return (
      <div className="container margtop3rem">
        <SiteTitle />
        {/* End Site Title================================================== */}
        {/* Begin Featured================================================== */}
        <section className="featured-posts">
          <div className="section-title">
            <h2>
              <span>Top articles</span>{/**feature */}
            </h2>
          </div>
          <div className="card-columns listfeaturedtag">        
              {this.props.toplist.map(item => ( 
                <div >
                    <Link to={`/post/${item._id}`}>
                        <PostItemFeature item={item}  key={item._id}/>  
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
            <p className="lead">
              <img style={{marginTop:20,marginBottom:50}} src={"http://www.gpsypro.com/wp-content/uploads/2017/02/reactbanner.png"}/>
              You’ll never be brave if you do not get hurt. You’ll never learn if you do not make mistakes. You’ll never be successful if you do not encounter failure. 
            </p>
          </div>
          <div className="card-columns listrecent">
            {/* begin post  post all post */}       
             {this.props.list.map(item => (
               <div>
                  <Link to={`/post/${item.id}`}>
                    <PostItemAllPost item={item}  key={item.id}/> 
                  </Link> 
              </div>
            ))} 
            {/* end post */}
          </div>
          <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className={this.state.page===0?"page-item disabled":"page-item"}>
                  <div className="page-link" onClick={()=>this.renderpage(this.state.page-1)}>Previous</div>
                </li>
                <li className="page-item"><div className="page-link"   onClick={()=>this.renderpage(1)}>1</div></li>
                <li className="page-item"><div className="page-link"   onClick={()=>this.renderpage(2)}>2</div></li>
                <li className="page-item"><div className="page-link"   onClick={()=>this.renderpage(3)}>3</div></li>
                <li className="page-item">
                  <div className="page-link" onClick={()=>this.renderNextPage()}>Next</div>
                </li>
              </ul>
          </nav>
        </section>
        {/* End List Posts ================================================== */}
        {/* <AlertBar/>          */}
      </div>
    );
  }
}
