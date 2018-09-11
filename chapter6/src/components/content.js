import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }
    handleClick(event) {

        this.setState({ counter: ++this.state.counter })
    }
    render() {
        return (
            <button
                onClick={this.props.handler}
                className="btn btn-danger">
                Increase Volume (Current volume is {this.props.counter})
            </button>
        );
    }
}

export default Content;