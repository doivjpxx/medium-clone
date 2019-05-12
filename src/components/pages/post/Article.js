import React, { Component } from 'react'

export default class Article extends Component {
    componentWillMount(){
        this.props.detailArticle(this.props.id)    
    }
    render() {
        return (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="mainheading">
                    {/* Begin Top Meta */}
                    <div className="row post-top-meta">
                        <div className="col-md-2">
                            <img className="author-thumb" src={`${this.props.article.avatar}`} alt="author" />
                            {console.log(this.props.acticle)}
                        </div>
                        <div className="col-md-10">
                            <div className="link-dark" href="author.html">{this.props.article.author}</div><div href="###" className="btn follow">Follow</div>
                            <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                            <span className="post-date">22 July 2017</span><span className="dot" /><span className="post-read">6 min read</span>
                        </div>
                    </div>
                    {/* End Top Menta */}
                    <h1 className="posttitle">{this.props.article.title}</h1>
                </div>
                {/* Begin Featured Image */}
                {/* <img className="featured-image img-fluid" /> */}
                {/* End Featured Image */}
                {/* Begin Post Content */}
                <div className="article-post">
                <p dangerouslySetInnerHTML={{ __html:this.props.article.text }}/>
                    {console.log(this.props.article)}                 
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
