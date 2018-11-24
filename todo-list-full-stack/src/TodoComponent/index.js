import React, { Component } from 'react';
import './style.css';
// import Form from './Form';
import TodoList from './ListTodos';

class TodoContainer extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      term: '',

    };
  }

  handleChange = (e) =>{
    this.setState({term: e.target.value});
  }

  handleItemClick = ({value, checked}) =>{
    this.setState({
      items: this.state.items.map(item => item.value === value ? {value, checked: !checked}: item)
    });
    console.log(checked, 'checked')
  }

  onSubmit = (e) =>{
    e.preventDefault();
    if(this.state.term.length > 0){
      this.setState({
        term: '',
        items: [...this.state.items, {value: this.state.term, chkecked: false}]
      });
    }
  }

  handleDelete = (id) =>{
    console.log('todo: removed todo at id', id);
  }

  render() {
    console.log(this.state, 'THIS IS THE STATE')
    return (
      <div className="center">
        <div class="row header">
          <h1 class="col s6 offset-s3 center-align teal-text">My To-Do List!</h1>
        </div>

        <div className="mainCenter">
          <form onSubmit={this.onSubmit} class="col s6 offset-s3" className="form">
            <input placeholder="add task" value={this.state.term} onChange={this.handleChange}
            className="inputField" className="input"/>
            <button className="add">Add to the List</button>
          </form>

          <TodoList
            onTodoClick={this.handleItemClick}
            onDelete={this.handleDelete}
            todos={this.state.items}
          />


        </div>

        <footer className="footer-outer">
          <span className="footer">
            Number of completed items in an array:
            {this.state.items.filter(item => item.checked).length}
          </span>
        </footer>
      </div>
    );
  }
}

export default TodoContainer;
