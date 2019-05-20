
import React, { Component } from 'react'
import './comment.css'
import iconDelete from '../../../assets/img/cancel.png'

export default class Comment extends Component {
    constructor(props) {
        super(props);      
        this.state = {
          showComments: false,
          text:"",
          post:0,
        commentCount:0,refresh:true
        };
        this._handleClick=this._handleClick.bind(this)
        this._getComments=this._getComments.bind(this)
        this._getCommentsTitle=this._getCommentsTitle.bind(this)
      }

    //  componentWillMount(){
    //    this.props.detailArrticle(this.props.id)
    //  }

      _handleClick(){
        this.setState({
          showComments: !this.state.showComments
        });
      }
      
      _handleSubmit(event) { 
        event.preventDefault();
        this.props.postCommentArticle(this.props.id,this.state.text)
        this.setState({refresh:!this.state.refresh, commentCount: this.props.article.comments.length+1})
      }
    

      _getComments(){         
        return this.props.comments.length===0?this.props.article.comments.map((comment) => { 
          return (
            <div className="comment" key={comment._id}>
            {/* <p className="comment-header">{this.props.author}</p> */}
            {console.log(comment.text)}
            <p className="comment-body">- {comment.text}</p>
          </div>
          ); 
        })
        :
        this.props.comments.map((comment) => { 
          return (
            <div className="comment" key={comment._id}>
            {/* <p className="comment-header">{this.props.author.name}</p> <img src={`${this.props.author.avater}`}/> */}
            <p className="comment-header"><img className="author-thumb" src={`${this.props.user.avatar}`}/> <span style={{fontSize:12}}> {this.props.user.name} </span> </p>
            <p className="comment-body">- {comment.text} <span style={{float:"right",width:20,height:20}}><img src={iconDelete}/></span></p>
          </div>
          )
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
    // end CommentBox component
      
      render () {
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
            Comments {this.state.commentCount<2?this.props.article.comments?this.props.article.comments.length:this.props.comments.length:this.props.comments.length}
            </h4>
            {this.state.showComments?this._getComments():null}
            {console.log(this.props.article)}
          </div>  
        );
      }
     } // end render
      
      
    