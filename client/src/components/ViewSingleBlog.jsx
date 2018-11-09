import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Blog extends Component {
  constructor(props) {
    super(props);

    
  }


   
  componentDidMount() {
    fetch("http://localhost:3000/api/Blogs")
      .then(res => res.json())
      .then(blogs => {
        this.setState({ blogs });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 className="display-4">View</h1>
          <hr />
        </div>
        {console.log(this.props.blogs)}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"></h5> 
            <p className="card-text"></p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
