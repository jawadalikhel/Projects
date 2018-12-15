import React, {Component} from 'react';
import './style.css';
import Login from './Login';

class Main extends Component{
  render(){
    return(
      <div id="MainContainer">
        <Login />
        <h1>BAlance Main</h1>
      </div>
    )
  }
}

export default Main;
