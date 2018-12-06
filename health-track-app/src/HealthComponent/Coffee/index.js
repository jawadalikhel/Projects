import React, { Component } from 'react';
import './style.css'
import Chart from './Chart';
import Device from '../Device';

class Coffee extends Component {

  render() {
    return (
        <div id="coffeeContainer">

        <div className="goBack"><a href="/selection" >BackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkBackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</a></div>

          <div className="topScreen"></div>

          <section><Chart/></section>

          <Device />
        </div>
    );
  }
}

export default Coffee;
