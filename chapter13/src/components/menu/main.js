import {
  BrowserRouter as Router,
  Route,
  
} from 'react-router-dom';
import React, { Component } from 'react';

import Content from './content';
import About from './about';
import Contact from './contact';
import Login from './login';
import Post from './post';
import Posts from './posts';
const {withRouter} = require('react-router')

class Main extends Component {
    render(){
        return (
    <Router>
        <Route path="/" component={Content} >
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} posts={Posts}/>
            <Route path="/posts/:id" component={Post}  posts={Posts}/>
            <Route path="/contact" component={withRouter(Contact)} />
        </Route>
        <Route path="/login" component={Login}/>
    </Router>);
    }
}
export default Main;