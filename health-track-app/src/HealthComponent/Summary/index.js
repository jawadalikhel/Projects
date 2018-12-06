import React, {Component} from 'react';
import './style.css';
import Device from '../Device';

class Summary extends Component{
  render(){
    return(
      <div className="summaryContainer">
        <h1 className="soon">Comming Soon</h1>
        <Device />
      </div>
    )
  }
}

export default Summary;
