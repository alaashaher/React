import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import DefultMain from './components/defult/defult-main';
import Main from './components/main-/main';
import Content from './components/higher-order/content';

ReactDOM.render(
    <Content/>,
    document.getElementById('app')
);


module.hot.accept();



