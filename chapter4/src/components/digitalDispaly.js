import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const DigitalDisplay = function (props) {
    return React.createElement(
      "div",
      null,
      props.time
    );
  };
  export default DigitalDisplay;