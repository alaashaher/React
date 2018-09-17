import React, { Component } from 'react';
class DefultButton extends Component {
    render() {
        return <button className="btn" >{this.props.buttonLabel}</button>
    }
}
DefultButton.defaultProps = { buttonLabel: 'Submit' }


export default DefultButton;
