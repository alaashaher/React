import React, { Component } from 'react';
import Button from './button';
class Main extends Component {
    render() {
      // let number = 1
      return (
        <div>
          <Button buttonLabel="Start" title={"1"}  email="hi@azat.co"/>
          <Button handler=""/>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      )
    }
  }
  export default Main;