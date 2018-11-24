import React, { Component } from 'react';
import './App.css';
import TodoComponent from './TodoComponent';
import NewTodo from './NewToDo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoComponent />
      </div>
    );
  }
}

export default App;
