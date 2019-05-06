import React, { Component } from "react";
import { Link } from "react-router-dom";
import medium from "../../../assets/img/medium-1.png";

export default class Header extends Component {
  render() {
    return (
      <div>    
        <nav id="navbar" className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            {/* Begin Logo */}
            <a className="navbar-brand" href="index.html">
              <img src={medium} alt="logo" />
            </a>
            {/* End Logo */}
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              {/* Begin Menu */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/post">
                    Post
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/my-stories">
                    My Stories
                  </Link>
                </li>

                {/* End Menu */}
                {/* Begin Search */}
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <span className="search-icon">
                    <svg
                      className="svgIcon-use"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                    >
                      <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z" />
                    </svg>
                  </span>
                </form>

                <li className="nav-item">
                  <Link  className="nav-link"  to="/login">Login</Link>
                </li>
              </ul>
              {/* End Search */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
