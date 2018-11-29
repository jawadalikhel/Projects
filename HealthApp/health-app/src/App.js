import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import SelectTracker from './SeletTracker;';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/tracker' component={SelectTracker} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
