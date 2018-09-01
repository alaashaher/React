import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AnalogDisplay from './analogDisplay'
import DigitalDisplay from './digitalDispaly'
const title = 'My Minimal React Webpack Babel Setup';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = { currentTime: new Date().toLocaleString() };
  }
  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    console.log('Rendering Clock...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime,
      React.createElement(AnalogDisplay, { time: this.state.currentTime }),
      React.createElement(DigitalDisplay, { time: this.state.currentTime })
    );
  }
}

export default Clock;