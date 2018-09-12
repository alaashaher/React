import React, { Component } from 'react';

class ClickCounterButton extends Component {
    render() {
        return (
            <button onClick={this.props.handler}
                className="btn btn-danger">
                "Increase Volume (Current volume is 
      {this.props.counter}"
      
          </button>
        );
    }
}

export default ClickCounterButton;
