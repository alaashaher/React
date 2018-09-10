import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import powerFulDsc from './featureDesc'
const title = 'My Minimal React Webpack Babel Setup';

class FeatureImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div style={{width:'120px' , borderRadius:'50%' , height:'130px',margin: 'auto'}}>
            <img src ={this.props.image}/>
            
        </div>
        );
    }
}
export default FeatureImage;