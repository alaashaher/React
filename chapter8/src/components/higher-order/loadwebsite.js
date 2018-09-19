import React, { Component  } from 'react';
import ReactDOM from 'react-dom';
const LoadWebsite = (Component) => {
    class _LoadWebsite extends Component {
      constructor(props) {
        super(props)
        this.state = {label: 'Run', handleClick: this.handleClick.bind(this)} 
      }
      getUrl() {
        return 'https://facebook.github.io/react/docs/top-level-api.html'
      }
      handleClick(event) {
        document.getElementById('frame').src = this.getUrl()
      }
      componentDidMount() {
        console.log(ReactDOM.findDOMNode(this))
      }
      render() {
        console.log(this.state)
        return <Component {...this.state} {...this.props} />
      }
    }
    _LoadWebsite.displayName = 'EhnancedComponent'
  
    return _LoadWebsite;
  }
  
  export default LoadWebsite;