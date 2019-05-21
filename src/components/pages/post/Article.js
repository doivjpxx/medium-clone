import React, { Component } from 'react'
import moment from "moment";
import Comment from '../../../containers/pages/post/Comment'

export default class Article extends Component {
    constructor(props){
        super(props);
        this.state={
            isfollow : false
            // this.props.user.following.indexOf(this.props.article.author_id)>-1?true:false
        }   
        this.checkFollow=this.checkFollow.bind(this)
        this.follow=this.follow.bind(this)
        this.unfollow=this.unfollow.bind(this)
    }
    componentWillMount(){
        this.props.detailArticle(this.props.id)
       // this.setState({isfollow:this.checkFollow()})
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
  
    checkFollow(){
        const following =  this.props.user.following
        const id=  this.props.article.author_id
            // if(following.indexOf(id)>=0) this.setState({isfollow:true})
            // else return this.setState({isfollow:false})
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
        console.log(this.props.user.following)
        return (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                {this.props.loadingDetailArticle?
                <div >
                <div className="mainheading">
                    {/* Begin Top Meta */}
                    <div className="row post-top-meta">
                        <div className="col-md-2">
                            <img className="author-thumb" src={`${article.author.avatar}`} alt="author" />
                        </div>
                        <div className="col-md-10">
                            <div className="link-dark" href="author.html">
                            {article.author.name}
                            </div>
                            <div className="btn follow"
                                onClick={isfollow?()=>this.unfollow(article.author.id):()=>this.follow(article.author.id)}
                                >
                                {isfollow?"Unfollow":"Follow"}
                            </div>
                            <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                            <span className="post-date">{moment(article.author.createdAt).format('llll')}</span>
                        </div>
                    </div>
                    {/* End Top Menta */}
                    <h1 className="posttitle">{article.title}</h1>
                </div>
                {/* Begin Post Content */}
                <div className="article-post">
                <p dangerouslySetInnerHTML={{ __html:article.text }}/>
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
            :
            <div className="container"><img style={{display:'flex',margin:'0 auto',alignItems:'center',justifyContent:'center'}} src={"http://images.shejidaren.com/wp-content/uploads/2018/03/134715wPw.jpg"}/></div>}
                 <Comment id={this.props.id} commentFeature={this.props.article.comments}/>
            </div>        
            
        )
    }
}
