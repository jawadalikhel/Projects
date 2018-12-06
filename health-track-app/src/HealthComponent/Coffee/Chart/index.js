import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './style.css';

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
              30,
              0,
              50,
              0,
          ],
          backgroundColor:[
            '#70A9A1','lightblue'
          ],
          barPercentage:[
            90
          ]
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
              30,
              this.state.chartData.datasets[0].data[1] + 4,
              50,
              0,
            ],

          }
        ]
      }
    });
  }

  IncrementItem8 = () => {
    console.log(this.state.datasets, 'the state')
    this.setState({
      chartData:{
        labels: ['past', 'daily'],
        datasets: [
          {
            label: 'COFFEE',
            data: [
              30,
              this.state.chartData.datasets[0].data[1] + 8,
              50,
              0,
            ],

          }
        ]
      }
    });
  }

  IncrementItem16 = () => {
    console.log(this.state.datasets, 'the state')
    this.setState({
      chartData:{
        labels: ['past', 'daily'],
        datasets: [
          {
            label: 'COFFEE',
            data: [
              30,
              this.state.chartData.datasets[0].data[1] + 16,
              50,
              0,
            ],

          }
        ]
      }
    });
  }

  IncrementItem24 = () => {
    console.log(this.state.datasets, 'the state')
    this.setState({
      chartData:{
        labels: ['past', 'daily'],
        datasets: [
          {
            label: 'COFFEE',
            data: [
              30,
              this.state.chartData.datasets[0].data[1] + 24,
              50,
              0,
            ],

          }
        ]
      }
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.chartData.datasets[0], 'hiiiii')
  }

  render(){
    return(
      <div>
        <Bar className="bar"
          data={this.state.chartData}
        	height={'40em'}
          width={'40em'}

        />

        <form onSubmit={this.handleSubmit} className="data">
          <button onClick={this.IncrementItem4} className="btn">4oz</button>
          <button onClick={this.IncrementItem8} className="btn">8oz</button>
          <button onClick={this.IncrementItem16} className="btn">16oz</button>
          <button onClick={this.IncrementItem24} className="btn">24oz</button>
        </form>
      </div>
    )
  }
}

export default Chart;
