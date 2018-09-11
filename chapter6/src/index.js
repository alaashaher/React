import React from 'react';
import ReactDOM from 'react-dom';
import Event from './components/event';
import Content from './components/content';
import Radio from './components/radio'
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render (
  <Radio/>,
  document.getElementById('app')
)

module.hot.accept();
