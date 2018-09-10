import React from 'react';
import ReactDOM from 'react-dom';
import Content from './components/content'
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Content, null)
), document.getElementById('content'));

module.hot.accept();
