import React, { Component } from 'react';
import ClickCounterButton from './clickcounterbutton'
class Event extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({ counter: ++this.state.counter })
        alert("hello");
    }
    render() {
        return (
            <div>
                <ClickCounterButton handler={this.handleClick} counter={this.state.counter} />
                <br />
            </div>
        )
    }
}
export default Event;
