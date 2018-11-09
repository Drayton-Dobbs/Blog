import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class InputBlog extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <Fragment>
            <div className="jumbotron">
            <h1 className="display-4">Anything you would like to say?</h1>
            <hr></hr>



        </div>
            <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div className="form-group">
          <label htmlFor="inputlg">Text</label>
          <textarea type="text" className="form-control form-control-lg" id="inputlg"></textarea>
        </div>
        <div className="form-group form-check">
        </div> 
      </form>
      <button type="submit" className="btn btn-primary">Submit</button>
      </Fragment>;
    }
}

export default InputBlog;