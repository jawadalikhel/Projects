import React, { Component } from 'react';
import '../App.css';
import Selection from './Selection';
import Coffee from './Coffee';
import Login from './Login';

class Health extends Component {
  render() {
    return (
      <div className="App">
        <h1>health Component</h1>
        <Selection />
        <Coffee />
        <Login />
        <h2>thats it</h2>
      </div>
    );
  }
}

export default Health;