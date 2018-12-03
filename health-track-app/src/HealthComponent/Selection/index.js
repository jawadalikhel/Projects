import React, { Component } from 'react';
import './style.css';
import { Icon, Menu } from 'semantic-ui-react'
import Coffee from '../Coffee';

class Selection extends Component {
  render() {
    return (
      <div className="SelectionContainer">
        <div>
          <a href="/" className="logout">Logout</a>
        </div>

        <div className="wrapper">
          <div className="cup">
            <span className="handle"></span>
            <span className="smoke"></span>
          </div>
        </div>

        <div className="Alwrapper">
          <div className="Alcup">
            <span className="Alhandle"></span>
            <span className="Alsmoke"></span>
          </div>
        </div>


      </div>
    );
  }
}

export default Selection;

// <img id="coffee" src='https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc37a5a58e5ebc3e7b5d5763014c1169&auto=format&fit=crop&w=934&q=80'/>

// <div id="coffeeDiv">
//   <input className="coffee" type="submit" value="Coffee"/>
// </div>
//
// <div id="alcoholDiv">
//   <input className="alcohol" type="submit" value="Alcohol"/>
// </div><br /><br />
//
// <div id="summaryDiv">
//   <input className="summary" type="submit" value="Summary"/>
// </div><br /><br />
