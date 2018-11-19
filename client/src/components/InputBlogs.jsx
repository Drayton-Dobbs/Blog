import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class InputBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange1 = event => {
    this.setState({ title: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ content: event.target.value });
  };

  submit = () => {
    let newBlog = {
      title: this.state.title,
      content: this.state.content
    };

    fetch(`http://localhost:3000/api/Blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    })
      .then(res => res.json())
      .then(newBlogPost => {
        this.setState({ newBlogPost });
      })
      .catch(e => console.log(e));
  };

  render() {
    return (
      <Fragment>
        <div className="jumbotron">
          <h1 id="headerInput" className="display-4">
            Anything you would like to say?
          </h1>

          {console.log(this.state)}
        </div>
        <form id="inputBlog">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.title}
              onChange={this.handleChange1}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputlg">Text:</label>
            <textarea
              type="text"
              className="form-control form-control-lg"
              id="inputlg"
              value={this.state.content}
              onChange={this.handleChange2}
            />
          </div>
          <div className="form-group form-check" />
        </form>
        <button
          type="submit"
          onClick={this.submit}
          id="submit"
          className="btn btn-primary"
        >
          {console.log(this.state)}
          Submit
        </button>
      </Fragment>
    );
  }
}

export default InputBlog;
