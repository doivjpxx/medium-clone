import React, { Component } from 'react'
import SiteTitle from './SiteTitle'
import PostItemFeature from '../../../containers/pages/home/postFeature/PostItem';
import PostItemAllPost from '../../../containers/pages/home/allPost/PostItem';
import { Link } from "react-router-dom";
import loading from '../../../assets/img/Spinner.svg';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      page:1,
      loading:this.props.status
    }
    this.renderpage=this.renderpage.bind(this)
    this.renderNextPage=this.renderNextPage.bind(this)
  }
  componentWillMount(){
    this.props.getAllArticles(this.state.page);
    this.props.getTopArticle ();
  }
  renderpage(value){ 
      this.setState({page:value})
      this.props.getAllArticles(value)
    }
  renderNextPage(){   
    this.props.getAllArticles(this.state.page+1)
    this.setState({page:this.state.page+1})
  }
  
  render() {
    //console.log(this.props.toplist)
    return (
      <div>
        <SiteTitle />
      {this.props.loadingHome==1?<div className="">
        
        {/* End Site Title================================================== */}
        {/* Begin Featured================================================== */}
        <section className="featured-posts container">
          <div className="section-title">
            <h2>
              <span>Top articles</span>{/**feature */}
            </h2>
          </div>
          <div className="card-columns listfeaturedtag">        
              {this.props.topArticle.map(item => ( 
                <div key={item._id}>
                    <Link to={`/post/${item._id}`}>
                        <PostItemFeature item={item}  key={item._id}/>  
                    </Link>                       
                </div>
                ))}      
          </div>
          
        </section>
        {/* End Featured================================================== */}
        {/* Begin List Posts================================================== */}
        <section className="recent-posts ">
          <div className="section-title">
            <h2 className="container">
              <span>All articles</span>
            </h2>
            {/* <p className="lead">
              <img className="banner" src={"http://www.programmerforhire.eu/images/banner2.jpg"}/>         
            </p> */}
          </div>
          <div className="card-columns listrecent container">
            {/* begin post  post all post */}       
             {this.props.allArticle.map(item => (
               <div key={item.id}>
                  <Link to={`/post/${item.id}`}>
                    <PostItemAllPost item={item}  key={item.id}/> 
                  </Link> 
              </div>
            ))} 
            {/* end post */}
          </div>
          <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-end container">
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
      </div>:<div className="container"><img style={{display:'flex',margin:'0 auto',alignItems:'center',justifyContent:'center'}} src={"https://ituef.github.io/mos/images/g2a_spinner.gif"}/></div>}
      
      </div>
    );
  }
}
