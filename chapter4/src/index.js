import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
import Clock from './components/clock'
const title = 'My Minimal React Webpack Babel Setup';


ReactDOM.render(
  React.createElement(Clock, null),
  document.getElementById('app')
)

module.hot.accept();
