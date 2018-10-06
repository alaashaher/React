import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Link
} from 'react-router-dom';
import App from './components/App';
import Movies from './components/Movies';
import Movie from './components/Movie';

module.exports = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Movies} />
        <Route path="movies" component={Movies}>
          <Route path=":id" component={Movie} />
        </Route>
      </Route>
    </Router>
  )
  