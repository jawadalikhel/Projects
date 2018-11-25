import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Button from './Button';
import Display from './Display';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons />
        <Button />
        <Display />
      </div>
    );
  }
}

export default App;
