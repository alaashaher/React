import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import TooltipClass from './components/tooltipclass';
ReactDOM.render(
    <TooltipClass/>,
    document.getElementById('app')
);


module.hot.accept();



