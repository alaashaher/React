import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';
import TimerWrapper from './components/Timerw';
ReactDOM.render(
    <TimerWrapper/>,
    document.getElementById('app')
);


module.hot.accept();



