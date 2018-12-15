import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import Main from './MainComponent';
import Login from './MainComponent/Login';
import Device from './MainComponent/Device';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch>
        <Route exact path='/' component={Device} />
        <Route path='/login' component={Login} />
      </Switch>

      </div>
    );
  }
}

export default App;
