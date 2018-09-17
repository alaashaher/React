import React, { Component } from 'react';
import Button from './button';
class Main extends Component {
    render() {
      let number = 1
      return (
        <div>
          <Button buttonLabel="Start"/>
          <Button />
          <Button title={number}/>
          <Button />
          <Button email="not-a-valid-email"/>
          <Button email="hi@azat.co"/>
        </div>
      )
    }
  }
  export default Main;