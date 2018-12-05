import React, { Component } from 'react';
import './style.css';
import { Icon, Menu } from 'semantic-ui-react'
import Coffee from '../Coffee';

class Selection extends Component {
  render() {
    return (
      <div className="SelectionContainer">

        <div className="navbar">
          <a href="/" className="logout">Logout</a>
        </div>

        <a href="/coffee">
          <div className="wrapper">
            <div className="cup">
              <span className="handle"></span>
              <span className="smoke"></span>
            </div>
          </div>
        </a>

        <a href="/alcohol">
          <div id="beerThing">
            <section>
              <div id="action">
                <div id="keg">
                  <div id="pipe-handle"></div>
                  <div id="pipe"></div>
                  <div id="pipe-front"></div>
                </div>

                <div class="glass">
                  <div class="beer"></div>
                  <div class="handle">
                    <div class="top-right"></div>
                    <div class="bottom-right"></div>
                  </div>
                  <div class="front-glass"></div>
                </div>
              </div>
            </section>
          </div>
        </a>

        <a href="/summary">
          <div id="summary">
            <section>
              <h1>Summary</h1>
            </section>
          </div>
        </a>

        <div className="bottomOfScreen">
          <div className="homeBtn">Home</div>
        </div>
    </div>


    );
  }
}

export default Selection;



// <div className = "chart">
//   <img src="https://vega.github.io/vega/examples/img/stacked-bar-chart.png" />
// </div>



// <div className="bowl">
//   <div className="inner">
//     <div className="fill">
//     <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300">
//     <path className="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"/>
//     </svg>
//     </div>
//   </div>
// </div>





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
