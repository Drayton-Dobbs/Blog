import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render } from "react-dom";
import BlogCards from "./BlogCard";

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/Blogs")
      .then(res => res.json())
      .then(blogs => {
        this.setState({ blogs });
      })
      .catch(e => console.log(e));
  }

  setBlogs() {
    return this.state.blogs.map((blogs, index) => {
      return (
        <BlogCards
          key={index}
          id={blogs.id}
          title={blogs.title}
          content={blogs.content}
        />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-1">
            <strong>Blogs Free</strong>
          </h1>
          <div id="para">
            <h1 className="lead">This is a simple blog posting website,</h1>
            <h1 className="lead">
              {" "}
              enjoy the freedom to discuss whatever you would like.
            </h1>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="../createBlog">
                  Create Post
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="cardCon">{this.setBlogs()}</div>

        <footer id="foot" className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <ul className="d-flex justify-content-between list-unstyled">
                  <li>
                    <a href="#!" />
                    <span className="glyphicon glyphicon-menu-up" />
                    <a href="https://www.github.com/Drayton-Dobbs">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/drayton-dobbs/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a id="ugLink" href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default FrontPage;
