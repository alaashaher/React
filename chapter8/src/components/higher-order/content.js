import React, { Component  } from 'react';

import LoadWebsite from './loadwebsite';
import Button from './element';
import Logo from './logo';
import Link from './link';
const EnhancedButton = LoadWebsite(Button);
const EnhancedLink = LoadWebsite(Link);
const EnhancedLogo = LoadWebsite(Logo);

class Content extends Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}


export default Content;