import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';

import Content from './content';
import About from './about';
import Contact from './contact';
import Login from './login';
import Post from './post';
import Posts from './posts';
const posts = [{
    slug: 'tf155544',
    title: 'post1'
},
{
    slug: 'fh555566',
    title: 'post1'
}
    ,
{
    slug: 'tesdddt',
    title: 'post1'
}


]
class Main extends Component {
    render(){
        return (
    <Router>
        <div>
            <Route path="/" component={Content} />
            <Route path="/about" component={About} />
            <Route path="/posts"render={(props) => <Posts {...props} posts={posts} />}/>
            <Route path="/posts/:id" component={Post} posts={Posts} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login}/>
        </div>
    </Router>);
    }
}
export default Main;