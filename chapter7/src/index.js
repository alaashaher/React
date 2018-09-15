import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import Email from './components/email';
import Entered from './components/entered';
import Form from './components/form';
ReactDOM.render(
    <Email />,
    document.getElementById('app')
);


module.hot.accept();



