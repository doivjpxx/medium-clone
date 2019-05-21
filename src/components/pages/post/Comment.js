
import React, { Component } from 'react'
import './comment.css'

export default class Comment extends Component {
    constructor(props) {
        super(props);      
        this.state = {
          showComments: false,
          text:"",
          post:0,
        };
        this._handleClick=this._handleClick.bind(this)
        this._getComments=this._getComments.bind(this)
        this._getCommentsTitle=this._getCommentsTitle.bind(this)
      }

      _handleClick(){
        this.setState({
          showComments: !this.state.showComments
        });
      }
      
      _handleSubmit(event) { 
        event.preventDefault();
        const {text}=this.state;
        const {avatar,name}= this.props.user
        this.props.postCommentArticle(this.props.id,text,avatar,name);
        this.setState({text:""})
      }
    

      _getComments(){         
        return this.props.article.comments.map((comment) => { 
          return (
            <div className="comment" key={comment.id}>
              <p className="comment-header"><img className="author-thumb" src={`${comment.avatar}`}/> 
                  <span style={{fontSize:12}}> {comment.user} </span> 
              </p>
              <p className="comment-body">- {comment.text}</p>
            </div>
          ); 
        })     
      }
      _getCommentsTitle(){
        if (commentCount === 0) {
          return 'No comments yet';
        } else if (commentCount === 1) {
          return "1 comment";
        } else {
          return `${commentCount} comments`;
        }
      }
        
      render () {
     console.log(this.props.article)
     console.log(this.props.user.avatar)
        return(
          <div className="comment-box">
            <form className="comment-form" >
                <div className="comment-form-fields">
                  <textarea placeholder="Comment" rows="4" value={this.state.text} onChange={(evt)=>{this.setState({text: evt.target.value})}}></textarea>
                </div>
                <div className="comment-form-actions">
                  <button onClick={(evt)=>this._handleSubmit(evt)} >Post Comment</button>
                </div>
            </form>
            <button id="comment-reveal" onClick={this._handleClick}>
            {this.state.showComments?"Hide comments":"Show comments"}
            </button>
           
            <h4 className="comment-count">
            Comments {this.props.commentFeature?this.props.commentFeature.length:0}
            </h4>
            {this.state.showComments?this._getComments():null}
          </div>  
        );
      }
     } // end render
      
      
    