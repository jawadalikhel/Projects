import React, {Component} from 'react';
import './style.css';

class Device extends Component{

  render(){
    return(
      <div className="Dcontainer">

        <div className="topScreen"></div>
        <div id="bottomScreen"><div className="homeBtn"></div></div>

        <div className="nav">
          <a href="/selection" ><button className="back">Back</button></a><br />
          <a href="/"><button className="logout">Logout</button></a>
        </div>

      </div>
    )
  }
}

export default Device;
