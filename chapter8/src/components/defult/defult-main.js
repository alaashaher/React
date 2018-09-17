import React, { Component } from 'react';
import DefultButton from './defult-button';

class DefultMain extends Component {
    render() {
        return (
            <div>
                <DefultButton buttonLabel="Start" />
                <DefultButton />
                <DefultButton />
                <DefultButton />
            </div>
        )
    }
}

export default DefultMain;