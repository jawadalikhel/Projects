import React, { Component } from 'react';
import './style.css'
import Chart from './Chart';

class Coffe extends Component {

  render() {
    return (
        <div id="coffeeContainer">

        <div className="goBack"><a href="/selection" >BackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkBackkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</a></div>

          <div className="topScreen"></div>

          <section><Chart/></section>

          <div id="bottomOfScreen">
            <div className="homeBtn"></div>
          </div>
        </div>
    );
  }
}

export default Coffe;
