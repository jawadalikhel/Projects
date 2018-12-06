import React, {Component} from 'react';
import './style.css';

class Device extends Component{
  render(){
    return(
      <div className="Container">

        <div className="topScreen"></div>
        <div id="bottomScreen"><div className="homeBtn"></div></div>

        <div className="nav">
          <a href="/selection">Back</a>
          <a href="/">Logout</a>
        </div>

      </div>
    )
  }
}

export default Device;
