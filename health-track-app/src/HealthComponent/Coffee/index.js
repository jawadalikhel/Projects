import React, { Component } from 'react';
import './style.css'
import Chart from './Chart';
import Device from '../Device';

class Coffee extends Component {

  render() {
    return (
        <div id="coffeeContainer">
          <div className="topScreen"></div>
          <section><Chart/></section>
          <Device />
        </div>
    );
  }
}

export default Coffee;
