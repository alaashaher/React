import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import App from './components/defult-routing/app';
import Main from './components/menu/main';
ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);


module.hot.accept();



