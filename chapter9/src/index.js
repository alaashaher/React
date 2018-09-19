import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import Menu from './components/menu';
ReactDOM.render(
    <Menu/>,
    document.getElementById('app')
);


module.hot.accept();



