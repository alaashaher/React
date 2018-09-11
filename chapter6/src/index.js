import React from 'react';
import ReactDOM from 'react-dom';
import SaveButton from './components/save';
import Event from './components/event';
import Content from './components/content';
import Radio from './components/radio'
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render (
  <SaveButton/>,
  document.getElementById('app')
)

module.hot.accept();
