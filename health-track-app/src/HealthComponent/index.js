import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import './style.css';

import Login from './Login';
import Coffee from './Coffee';
import Alcohol from './Alcohol';
import Summary from './Summary';
import Selection from './Selection';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Selection />
      </div>
    );
  }
}

export default Main;
