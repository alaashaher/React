import React, { Component } from 'react';
import powerFul from './powerful'
import powerFulDsc from './powerfulDes'
const title = 'My Minimal React Webpack Babel Setup';

class mainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('div',
      null,
      React.createElement('h1', null, 'We are Bianaat'),
      React.createElement('p', null, 'A creative Digital Development agency')
    );
  }
}

export default mainPage;