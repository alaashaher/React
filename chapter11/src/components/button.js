import React, { Component } from 'react';

class Button extends Component {
    startTimer(event) {
      return this.props.startTimer(this.props.time)
    }
    render() {
      return <button
        type="button"
        className='btn-default btn'
        onClick={()=>{this.props.startTimer(this.props.time)}}>
        {this.props.time} seconds
      </button>
    }
  }

  export default Button;