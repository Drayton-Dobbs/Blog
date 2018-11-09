import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class BlogCards extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="card">
  <div className="card-body">
    <a>{this.props.id}</a>
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.content}</p>
    <div>
    <Link to="/blog">View Blog</Link>
    </div>
    
  </div>
</div>;
    }
}

export default BlogCards;