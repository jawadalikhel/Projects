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
        <h1 className="head">COMMING SOON</h1>
        <div className="soon">
          <img src="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png" />
        </div>
      </div>
    );
  }
}

export default Alcohol;
