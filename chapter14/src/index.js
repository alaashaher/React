import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import createStore from 'redux';
import routes from '../src/routes';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';



const { render } = require('react-dom')
const reducers = require('../modules')

module.exports = render((
  <Provider store={createStore(reducers)}>
    {routes}
  </Provider>
), document.getElementById('app'));


module.hot.accept();
