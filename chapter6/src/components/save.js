import React, { Component } from 'react';

class SaveButton extends Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    handleSave(event) {
        console.log(this, event);
        alert("you click save");
    }
    render() {
        //     return (<button onClick={this.handleSave}>
        //         Save
        // </button>);
        return (<div
            style={{ border: '1px solid red' }}
            onMouseOver={() => { console.log('mouse is over') }} >
            Open DevTools and move your mouse cursor over here
            </div>);
    }
}

export default SaveButton;