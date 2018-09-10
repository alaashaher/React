import React, { Component } from 'react';
const title = 'My Minimal React Webpack Babel Setup';

class FeatureDesc extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <h1>{this.props.headline}</h1>
            <p>{this.props.desc}.</p>
        </div>
        );
    }
}
export default FeatureDesc;