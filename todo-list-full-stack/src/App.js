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

  addTodo = (todo) =>{
    todo.id = Math.random();
    const newTodo = [...this.state.todoArr, todo];
    this.setState({
      todoArr: newTodo
    })
    console.log(this.state, 'this is todo')
  }

  deleteTodo = (id) =>{
    console.log(id, 'this is the DELETE id')
    const removeTodo = this.state.todoArr.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todoArr: removeTodo,
    })
  }

  render() {
    console.log(this.state, 'THIS IS THE STATE')
    return (
      <div className="App">
        <h1>ToDoList React</h1>

        <Form addTodo={this.addTodo}/>

        <ListTodos showTodo={this.state.todoArr} DeleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
