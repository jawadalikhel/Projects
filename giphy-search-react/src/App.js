import React, { Component } from 'react';
import './App.css';
import Giphy from './Giphy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Giphy React App</h1>
        <Giphy />
      </div>
    );
  }
}

export default App;
