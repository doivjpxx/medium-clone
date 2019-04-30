import React, { Component } from "react";
import "../assets/css/mediumish.css";
import "../assets/css/bootstrap.min.css";
import logo from "../assets/img/logo.png";
import s from "../assets/img/demopic/5.jpg";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav
          id="navbar"
          className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation"
        >
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="container">
            {/* Begin Logo */}
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="logo" />
            </a>
            {/* End Logo */}
            <div
              className="collapse navbar-collapse"
              id="navbarsExampleDefault"
            >
              {/* Begin Menu */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    Stories <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="post.html">
                    Post
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="author.html">
                    Author
                  </a>
                </li>
              </ul>
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
              {/* End Search */}
            </div>
          </div>
        </nav>
        {/* End Nav
================================================== */}
        {/* Begin Site Title
================================================== */}
        <div className="container">
          <div className="mainheading">
            <h1 className="sitetitle">Mediumish</h1>
            <p className="lead">
              Bootstrap theme, medium style, simply perfect for bloggers
            </p>
          </div>
          {/* End Site Title
================================================== */}
          {/* Begin Featured
	================================================== */}
          <section className="featured-posts">
            <div className="section-title">
              <h2>
                <span>Featured</span>
              </h2>
            </div>
            <div className="card-columns listfeaturedtag">
              {/* begin post */}
              <div className="card">
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url('${s}')` }}
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-block">
                      <h2 className="card-title">
                        <a href="post.html">We're living some strange times</a>
                      </h2>
                      <h4 className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </h4>
                      <div className="metafooter">
                        <div className="wrapfooter">
                          <span className="meta-footer-thumb">
                            <a href="author.html">
                              <img
                                className="author-thumb"
                                src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                                alt="Sal"
                              />
                            </a>
                          </span>
                          <span className="author-meta">
                            <span className="post-name">
                              <a href="author.html">Steve</a>
                            </span>
                            <br />
                            <span className="post-date">22 July 2017</span>
                            <span className="dot" />
                            <span className="post-read">6 min read</span>
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
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url('${s}')` }}
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-block">
                      <h2 className="card-title">
                        <a href="post.html">
                          The beauty of this world is in your heart
                        </a>
                      </h2>
                      <h4 className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </h4>
                      <div className="metafooter">
                        <div className="wrapfooter">
                          <span className="meta-footer-thumb">
                            <a href="author.html">
                              <img
                                className="author-thumb"
                                src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                                alt="Sal"
                              />
                            </a>
                          </span>
                          <span className="author-meta">
                            <span className="post-name">
                              <a href="author.html">Jane</a>
                            </span>
                            <br />
                            <span className="post-date">22 July 2017</span>
                            <span className="dot" />
                            <span className="post-read">6 min read</span>
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
                  </div>
                </div>
              </div>
              {/*end post */}
              {/* begin post */}
              <div className="card">
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url('${s}')` }}
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-block">
                      <h2 className="card-title">
                        <a href="post.html">Dreaming of Las Vegas Crazyness</a>
                      </h2>
                      <h4 className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </h4>
                      <div className="metafooter">
                        <div className="wrapfooter">
                          <span className="meta-footer-thumb">
                            <a href="author.html">
                              <img
                                className="author-thumb"
                                src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                                alt="Sal"
                              />
                            </a>
                          </span>
                          <span className="author-meta">
                            <span className="post-name">
                              <a href="author.html">Mary</a>
                            </span>
                            <br />
                            <span className="post-date">22 July 2017</span>
                            <span className="dot" />
                            <span className="post-read">6 min read</span>
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
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <div className="row">
                  <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                      <div
                        className="thumbnail"
                        style={{ backgroundImage: `url('${s}')` }}
                      />
                    </a>
                  </div>
                  <div className="col-md-7">
                    <div className="card-block">
                      <h2 className="card-title">
                        <a href="post.html">
                          San Francisco at its best view in all seasons
                        </a>
                      </h2>
                      <h4 className="card-text">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </h4>
                      <div className="metafooter">
                        <div className="wrapfooter">
                          <span className="meta-footer-thumb">
                            <a href="author.html">
                              <img
                                className="author-thumb"
                                src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                                alt="Sal"
                              />
                            </a>
                          </span>
                          <span className="author-meta">
                            <span className="post-name">
                              <a href="author.html">Sal</a>
                            </span>
                            <br />
                            <span className="post-date">22 July 2017</span>
                            <span className="dot" />
                            <span className="post-read">6 min read</span>
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
                  </div>
                </div>
              </div>
              {/* end post */}
            </div>
          </section>
          {/* End Featured
	================================================== */}
          {/* Begin List Posts
	================================================== */}
          <section className="recent-posts">
            <div className="section-title">
              <h2>
                <span>All Stories</span>
              </h2>
            </div>
            <div className="card-columns listrecent">
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Autumn doesn't have to be nostalgic, you know?
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt="###" />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Best galleries in the world with photos
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt="###" />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Little red dress and a perfect summer
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt="###" />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Thinking outside the box can help you prosper
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt="###" />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      10 Things you should know about choosing your house
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
              {/* begin post */}
              <div className="card">
                <a href="post.html">
                  <img className="img-fluid" src={s} alt />
                </a>
                <div className="card-block">
                  <h2 className="card-title">
                    <a href="post.html">
                      Visiting the world means learning cultures
                    </a>
                  </h2>
                  <h4 className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </h4>
                  <div className="metafooter">
                    <div className="wrapfooter">
                      <span className="meta-footer-thumb">
                        <a href="author.html">
                          <img
                            className="author-thumb"
                            src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&d=mm&r=x"
                            alt="Sal"
                          />
                        </a>
                      </span>
                      <span className="author-meta">
                        <span className="post-name">
                          <a href="author.html">Sal</a>
                        </span>
                        <br />
                        <span className="post-date">22 July 2017</span>
                        <span className="dot" />
                        <span className="post-read">6 min read</span>
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
              </div>
              {/* end post */}
            </div>
          </section>
          {/* End List Posts
	================================================== */}
          {/* Begin Footer
	================================================== */}
          <div className="footer">
            <p className="pull-left">Copyright © 2017 Your Website Name</p>
            <p className="pull-right">
              Mediumish Theme by{" "}
              <a target="_blank" href="https://www.wowthemes.net">
                WowThemes.net
              </a>
            </p>
            <div className="clearfix" />
          </div>
          {/* End Footer
	================================================== */}
        </div>
        {/* /.container */}
        {/* Bootstrap core JavaScript
    ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
      </div>
    );
  }
}
