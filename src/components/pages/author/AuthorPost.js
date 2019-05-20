import React, { Component } from 'react'
import moment from 'moment'
import delImg from '../../../assets/img/cancel.png'
import {Link} from 'react-router-dom'

export default class AuthorPost extends Component {
  componentWillMount(){
    this.props.getMyArticle()
  }
  render() {
    console.log(this.props.myArticle)
    return (
      <div className="graybg authorpage container">
        <div className="container">
          <div className="listrecent listrelated">           
            {/* begin post */}
            {this.props.myArticle.map((item)=>
               <div className="authorpostbox" key={item._id}>             
               <div className="card"> 
                  <div className="img-fluid img-thumb" 
                  style={{
                    backgroundImage: `url(${item.feature_img})`, 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative' 
                    }}>
                    <div  onClick={()=>this.props.deleteArticle(item._id)}><img src={delImg} style={{width:32,height:32, float:"right"}}/></div>    
                  </div>
                  <Link to={`/post/${item._id}`}>
                     <div className="card-block">
                   <h2 className="card-title">
                     <a href="post.html">
                       {item.title}
                     </a>
                   </h2>
                   <h4 className="card-text">
                     {item.description}
                   </h4>
                   <div className="metafooter">
                     <div className="wrapfooter">
                       <span className="meta-footer-thumb">
                         <a href="author.html">
                           <img
                             className="author-thumb"
                             src={item.author.avatar}
                             alt="authorImage"
                           />
                         </a>
                       </span>
                       <span className="author-meta">
                         <span className="post-name">
                           {item.author.name}
                         </span>
                         <br />
                         <span className="post-date">{moment(item.createdAt).format('llll')}</span>
                       </span>
                       <span className="post-read-more">
                         <a href="post.html" title="Read Story">
                           <svg
                             className="svgIcon-use"
                             width={25}
                             height={25}
                             viewBox="0 0 25 25"
                           >
                             <path
                               d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                               fillRule="evenodd"
                             />
                           </svg>
                         </a>
                       </span>
                     </div>
                   </div>
                 </div>
                 </Link>
               </div>
             </div>                 
            )}       
          </div>
        </div>
      </div>
    );
  }
}
