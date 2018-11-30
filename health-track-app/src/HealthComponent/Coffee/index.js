import React, { Component } from 'react';
import './style.css'
class Coffe extends Component {
  constructor(){
    super();
    this.state = {
      daily: [],
    }
  }

  getDaily = () =>{
    const data = this.state.daily;
    console.log(data, 'data in getDaily');
  }
  render() {
    return (
      <div className="Coffeecontainer">



        <h1>Coffe</h1>
      </div>
    );
  }
}

export default Coffe;
