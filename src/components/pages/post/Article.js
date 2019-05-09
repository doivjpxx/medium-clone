import React, { Component } from 'react'

export default class Article extends Component {
    componentWillMount(){
        this.props.detailArticle(this.props.id)
      
    }

    //  MyComponent() {
    //     return <div dangerouslySetInnerHTML={this.props.article.text} />;
    //   }
    render() {
        // var parser = new DOMParser()
        // let content = this.props.article.text
        // let contents = parser.parseFromString(content, "text/html");
        // contents.getElementsById('contents')
        return (
            <div className="col-md-8 col-md-offset-2 col-xs-12">
                <div className="mainheading">
                    {/* Begin Top Meta */}
                    <div className="row post-top-meta">
                        <div className="col-md-2">
                            <a href="author.html"><img className="author-thumb" src={require('../../../assets/img/demopic/1.jpg')} alt="Sal" /></a>
                        </div>
                        <div className="col-md-10">
                            <a className="link-dark" href="author.html">Sal</a><a href="###" className="btn follow">Follow</a>
                            <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                            <span className="post-date">22 July 2017</span><span className="dot" /><span className="post-read">6 min read</span>
                        </div>
                    </div>
                    {/* End Top Menta */}
                    <h1 className="posttitle">{this.props.article.title}</h1>
                </div>
                {/* Begin Featured Image */}
                <img className="featured-image img-fluid" 
                        // src="assets/img/demopic/10.jpg" alt 
                        //  src={require('../../../assets/img/demopic/10.jpg')} alt="logo"
                        />
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
                        <li><a href="##">Design</a></li>
                        <li><a href="##">Growth Mindset</a></li>
                        <li><a href="##">Productivity</a></li>
                        <li><a href="##">Personal Growth</a></li>
                    </ul>
                </div>
                {/* End Tags */}
            </div>

        )
    }
}
