import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Article extends Component {
    constructor(props){
        super(props);
        this.state={
            isfollow : setInterval( this.props.user.following.indexOf(this.props.article.author_id)>-1?true:false,10000)
        }
       
        this.checkFollow=this.checkFollow.bind(this)
        this.follow=this.follow.bind(this)
        this.unfollow=this.unfollow.bind(this)
    }
    componentWillMount(){
        this.props.detailArticle(this.props.id)
       // setInterval( this.checkFollow(),5000)
    }
  
    
     checkFollow(){
        const following =  this.props.user.following
        const id=  this.props.article.author_id
            if(following.indexOf(id)>=0) this.setState({isfollow:true})
            else return this.setState({isfollow:false}) 
    }
    follow(){
        this.props.follow(this.props.article.author_id)
        this.setState({isfollow:true})
    }
    unfollow(){
        this.props.unfollow(this.props.article.author_id)
        this.setState({isfollow:false})
    }
    render() {
        const {article} = this.props
        const {isfollow} = this.state 
       // console.log(this.props.user.following.indexOf(this.props.article.author_id))        
        return (        
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="mainheading">
                    {/* Begin Top Meta */}
                    <div className="row post-top-meta">
                        <div className="col-md-2">
                            <img className="author-thumb" src={`${article.author_avatar}`} alt="author" />
                        </div>
                        <div className="col-md-10">
                            <div className="link-dark" href="author.html">
                            {article.author_name}
                            </div>
                            <div className="btn follow"
                                onClick={isfollow?()=>this.unfollow(article.author_id):()=>this.follow(article.author_id)}
                                //onClick={()=>this.props.unfollow(article.author_id)}
                                >
                                {isfollow?"Unfollow":"Follow"}
                            </div>
                            <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                            <span className="post-date">22 July 2017</span><span className="dot" /><span className="post-read">6 min read</span>
                        </div>
                    </div>
                    {/* End Top Menta */}
                    <h1 className="posttitle">{article.title}</h1>
                </div>
                {/* Begin Post Content */}
                <div className="article-post">
                <p dangerouslySetInnerHTML={{ __html:article.text }}/>
                    {/* {console.log(article.author_id)}   */}
                </div>

                {/* End Post Content */}
                {/* Begin Tags */}
                <div className="after-post-tags">
                    <ul className="tags">
                        <li><a href="##">ReactJs</a></li>
                        <li><a href="##">Javacript</a></li>
                        <li><a href="##">NodeJs</a></li>
                        <li><a href="##">MongoDB</a></li>
                    </ul>
                </div>
                {/* End Tags */}
            </div>

        )
    }
}
