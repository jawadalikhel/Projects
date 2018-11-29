import React, { Component } from 'react';
import './App.css';
import Display from './Display';

class App extends Component {
  // constructor(){
  //   super();
  //   this.
  // }

  state = {
    data: [],
  }

  // async componentDidMount(){
  //   const api = await fetch('https://api.punkapi.com/v2/beers')
  //   const apiJson = api.json();
  //   console.log(apiJson, 'THE apiJson')
  //   this.setState({
  //     data: apiJson
  //   })
  // }

  getData = async () =>{
    try {
      const api = await fetch('https://api.punkapi.com/v2/beers')
      const apiJson = api.json();
      this.state
      console.log(apiJson, 'yooooooooooo')
    } catch (err) {
      console.log(err, 'error in getData')
    }
  }



  render() {
    // console.log(this.state.data, ' The fetch data')
    // const items = this.state.data

    console.log(this.state.data, 'fetch data')
    return (
      <div className="App">
        <Display data={this.state.data} />
       </div>
    );
  }
}

export default App;
