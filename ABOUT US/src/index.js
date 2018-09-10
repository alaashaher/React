import React from 'react';
import ReactDOM from 'react-dom';
import AboutUs from './pages/aboutUs'

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render (
  <AboutUs/>,
  document.getElementById('app')
)

module.hot.accept();
