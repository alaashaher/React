import React from 'react';
import ReactDOM from 'react-dom';
import BianaatWelcome from './components/BianaatWelcome'
const title = 'My Minimal React Webpack Babel Setup';

class Clock extends React.Component {
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
      this.state.currentTime
    );
  }
}
ReactDOM.render(
  React.createElement(Clock, null),
  document.getElementById('app')
)





module.hot.accept();
