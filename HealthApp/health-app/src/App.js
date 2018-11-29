import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './Main';
import Health from './Health';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/health' component={Health} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
