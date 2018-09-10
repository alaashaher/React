import React, { Component } from 'react';

const title = 'My Minimal React Webpack Babel Setup';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <div>
      <h1>
        We are Bianaat
       </h1>
      <p>
        A creative Digital Development agency
      </p>
    </div>
  }
}

export default Header;