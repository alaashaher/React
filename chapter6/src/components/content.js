import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = { counter: 0 }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(event) {
        this.setState({ counter: ++this.state.counter })
    }
    render() {
        return (
            <button
                onClick={this.handleClick}
                className="btn btn-danger">
                Increase Volume (Current volume is {this.state.counter})
            </button>
        );
    }
}

export default Content