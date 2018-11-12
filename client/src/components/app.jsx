import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FrontPage from './FrontPage';
import InputBlog from './InputBlogs';
import ViewSingleBlog from './ViewSingleBlog';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    
                    <Switch>
                        <Route exact path="/" component={FrontPage} />
                        <Route path="/createBlog" component={InputBlog} />
                        <Route path="/Blogs/:id" component={ViewSingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;