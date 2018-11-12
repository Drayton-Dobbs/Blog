import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class ViewSingleBlog extends Component {
  constructor(props) {
    super(props);
        this.state = {
            blog: {}
        }
    
  }


   
  componentDidMount() {
      console.log(this.props);
    fetch(`http://localhost:3000/api/Blogs/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(blog => {
        this.setState({ blog });
      })
      .catch(e => console.log(e));
  }







  render() {
    return (
      <Fragment>
          {console.log(this.state.blog)}
          {console.log(this.state)}
        <div className="jumbotron">
          <h1 className="display-4">View</h1>
          <hr />
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.blog.title}</h5> 
            <p className="card-text">{this.state.blog.content}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ViewSingleBlog;
