import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


import Login from './Login';
import Coffee from './Coffee';
import Selection from './Selection';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main</h1>
        <Login />
        <Coffee />
        <Selection />
      </div>
    );
  }
}

export default Main;
