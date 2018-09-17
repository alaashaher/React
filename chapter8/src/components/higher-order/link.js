import React, { Component  } from 'react';

class Link extends Component {
    render() {
      return <a onClick={this.props.handleClick} href="#">{this.props.label}</a>
    }
  }
  export default Link;
  