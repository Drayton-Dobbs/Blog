import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class BlogCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <div className="card">
          <div className="card-body">
          <div id="cat"></div>
          <h6 id="authortext" className="card-title">{this.props.author}</h6>
            <h5 id="titletext" className="card-title">{this.props.title}</h5>
            <p id="text" className="card-text">{this.props.content}</p>
            <div>
              <Link id="link"to={`/Blogs/${this.props.id}`}>View Blog</Link>
            </div>
          </div>
        </div>
  
    );
  }
}

export default BlogCards;
