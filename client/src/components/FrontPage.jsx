import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { render } from 'react-dom';
import BlogCards from './BlogCard';




class FrontPage extends Component {

    constructor(props) {
        super(props);
            this.state = {
                blogs: []
            }
    }

    componentDidMount() {
        fetch("http://localhost:3000/api/Blogs")
        .then(res => res.json())
        .then((blogs) => { 
            this.setState({blogs})}) 
        .catch(e => console.log(e))

    }

    setBlogs() {
       return this.state.blogs.map((blogs, index) => {
            return <BlogCards key={index} id={blogs.id} title={blogs.title} content={blogs.content}/>
        })
    }
    
  






    
    render() {
        console.log(this.state.blogs[0])
        return (<Fragment> <div className="jumbotron">
            <h1 className="display-4">Blogs Free</h1>
            <p className="lead">This is a simple blog posting website, enjoy the freedom to discuss whatever you would like on this platform.</p>
            <Link to="/createBlog">Create Blog Post</Link>
            <hr></hr>



        </div>
            
            {this.setBlogs()}
        </Fragment>)


  
    }
}

export default FrontPage;