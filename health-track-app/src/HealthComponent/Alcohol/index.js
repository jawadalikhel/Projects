import React, { Component } from 'react';
import './style.css'
import Chart from './Chart';
import Device from '../Device';

class Alcohol extends Component {

  render() {
    return (
      <div className="Alcoholcontainer">
        <Device />

        <div className="chart"><Chart /></div>

        <div className="dropdown">
          <span>Func facts</span>

          <div className="dropdown-con">
            <button>dfghjk,fghj</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Alcohol;
