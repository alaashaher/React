import React, { Component } from 'react';
import logo from '../assets/bianaat.png';
import FeatureDesc from './featureDesc'
import FeatureImage from './featureImage'


class Feature extends Component {

  render() {
    return (
      <div style={styles.container}>

        <FeatureImage image={this.props.featureImage} />
        <FeatureDesc desc={this.props.featureDesc}  headline={this.props.headline}/>

      </div>

    );
  }

}

export default Feature;

const styles = {
  container: {
    textAlign: 'Center'
  },
  logoStyle: {
    margin: '40px',
    border: '5px solid pink',
    width: '150px'
  }
  ,
  text: {
    margin: '40px',
    fontSize: '15pt'
  }

}
