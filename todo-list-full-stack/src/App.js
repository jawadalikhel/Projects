import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import ListTodos from './ListTodos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todoArr: [
        {content:'', id: null},
      ]
    }
  }


  render() {
    console.log(this.state, 'THIS IS THE STATE')
    return (
      <div className="App">
        <h1>ToDo List React</h1>

        <Form addTodo={this.addTodo}/>

        <ListTodos />
      </div>
    );
  }
}

export default App;
