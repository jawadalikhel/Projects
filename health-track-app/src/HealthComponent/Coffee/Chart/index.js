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

  IncrementItem4 = () => {
    console.log(this.state.datasets, 'the state')
    this.setState({
      chartData:{
        labels: ['past', 'daily'],
        datasets: [
          {
            label: 'COFFEE',
            data: [

              20,
              this.state.chartData.datasets[0].data[1] + 4,
              0,

            ],
            backgroundColor:[
              'rgba(255,99,132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.chartData.datasets[0].data[1], 'hiiiii')
  }

  render(){
    return(
      <div>
        <h1>Chart</h1>
        <Bar
          data={this.state.chartData}
        />

        <form onSubmit={this.handleSubmit}>
          <button onClick={this.IncrementItem4}>4oz</button>
        </form>
      </div>
    )
  }
}

export default Chart;
