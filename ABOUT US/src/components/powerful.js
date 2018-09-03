import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import powerFulDsc from './powerfulDes'
import powerFul_icon from '../assets/icon-01.png';
const title = 'My Minimal React Webpack Babel Setup';

class powerFul extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div style={{border: '30px rgb(21, 111, 126) solid' ,width:'120px' , borderRadius:'50%' , height:'130px'}}>
            <img src ={powerFul_icon}/>
            
        </div>
        );
    }
}
export default powerFul;