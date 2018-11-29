import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HealthComp from './HealthComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <HealthComp />
      </div>
    );
  }
}

export default App;
