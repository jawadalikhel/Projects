import React, { Component } from 'react';
import './App.css';
import ChuckNorris from './chuckNorris';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChuckNorris />
      </div>
    );
  }
}
// {this.state.loading ? <div>{this.state.data.value}</div> : <div>not loading..</div>}
export default App;
