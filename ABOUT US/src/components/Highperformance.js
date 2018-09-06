import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import powerFulDsc from './powerfulDes'
import highperformance_icon from '../assets/icon-02.png';
const title = 'My Minimal React Webpack Babel Setup';

class highPerformance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{border: '30px rgb(21, 111, 126) solid' ,width:'120px' , borderRadius:'50%' , height:'130px'}}>
            <img src ={highperformance_icon}/>
            
        </div>
        );
    }
}
export default highPerformance;