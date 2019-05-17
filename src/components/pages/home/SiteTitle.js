import React, { Component } from "react";

export default class Author extends Component {
  render() {
    return (
      <div className="mainheading" style={{marginTop:50}}>
        {/* <h1 className="sitetitle">Adventure is the best way to learn</h1> */}
        <p className="lead">
        {/* You’ll never be brave if you do not get hurt. You’ll never learn if you do not make mistakes. You’ll never be successful if you do not encounter failure.  */}
          <img style={{ width:'90%', margin:'0 auto', display:'flex'}} src={"http://smarttalentgroup.com.au/wp-content/uploads/2017/06/blog-banner-2-2.jpg"}/>
        </p>
      </div>
    );
  }
}
