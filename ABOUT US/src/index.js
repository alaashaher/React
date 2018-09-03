import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
import mainPage from './components/main_page'
import powerFul from './components/powerful'
import powerFulDsc from './components/powerfulDes'
const title = 'My Minimal React Webpack Babel Setup';



ReactDOM.render(
  React.createElement(mainPage, null),
  document.getElementById('app')
)
ReactDOM.render (
  React.createElement(powerFul,null),

  document.getElementById('contanir')
)

ReactDOM.render (
  React.createElement(powerFulDsc,null),
  document.getElementById('contanir_dsc')
)




module.hot.accept();
