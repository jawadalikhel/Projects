import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(){
  super();
  this.state = {
    loading: true,
    chartData:{
      labels: ['past', 'daily'],
      datasets: [
        {
          label: 'COFFEE',
          data: [
              20,
              0,
              0,
          ],
          backgroundColor:[
            'rgba(255,99,132,0.6)'            ]
          }
        ]
      }
    }
  }
  render(){
    return(
      <div>
        <h1>Chart</h1>
        <Bar
          data={this.state.chartData}
        />
      </div>
    )
  }
}

export default Chart;
