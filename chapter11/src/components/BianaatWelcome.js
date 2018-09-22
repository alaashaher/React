import React, { Component } from 'react';
import logo from '../assets/bianaat.png';
class BianaatWelcome extends Component {

  render() {
    return (
      <div  style={styles.container}>
      <a href={'https://www.bianaat.com'}  >
      <img src={logo} style={styles.logoStyle}/>
      </a>
       <div style={styles.text}>
         Welcome from Bianaat
       </div>
      </div>

    );
  }

}

export default BianaatWelcome;

const styles={
  container:{
     textAlign:'Center'
  },
  logoStyle :{
    margin: '40px',
    border: '5px solid pink',
    width:'150px'
  }
  ,
  text:{
    margin: '40px',
    fontSize:'15pt'
  }

}
