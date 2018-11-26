import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import Button from './Button';
import Display from './Display';


class App extends Component {
  constructor(){
    super();
    //// operations[]: holds the button inputs ex: [2, *,4,-,1]
    this.state = {operations: []}
  }
  render() {
    return (
      <div className="App">
        <Buttons />
        <Button />
        <Display data={this.state.operations} />

        <Buttons>
          <button onClick={this.handleClick} label="C" value="clear"></button>
          <button onClick={this.handleClick} label="7" value="7"></button>
          <button onClick={this.handleClick} label="4" value="4"></button>
          <button onClick={this.handleClick} label="1" value="1"></button>
          <button onClick={this.handleClick} label="0" value="0"></button>

          <button onClick={this.handleClick} label="/" value="/"></button>
          <button onClick={this.handleClick} label="8" value="8"></button>
          <button onClick={this.handleClick} label="5" value="5"></button>
          <button onClick={this.handleClick} label="2" value="2"></button>
          <button onClick={this.handleClick} label="." value="."></button>

          <button onClick={this.handleClick} label="x" value="*"></button>
          <button onClick={this.handleClick} label="9" value="9"></button>
          <button onClick={this.handleClick} label="6" value="6"></button>
          <button onClick={this.handleClick} label="3" value="3"></button>
          <button label="" value="null" />

          <button onClick={this.handleClick} label="-" value="-"></button>
          <button onClick={this.handleClick} label="+" size="2" value="equal"></button>
        </Buttons>

      </div>
    );
  }
}

export default App;
