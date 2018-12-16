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
      <div id="MainContainer">
        <div>
          <h1 className="header">Things Todo!</h1>
        </div>

        <div className="form">
          <form onSubmit={this.onSubmit} >
            <input className="inputBox" value={this.state.term} onChange={this.handleChange} placeholder="add task"/>
            <button className="add"><h1>Add</h1></button>
          </form>
        </div>

        <div className="mainCenter">


          <TodoList
            onTodoClick={this.handleItemClick}
            onDelete={this.handleDelete}
            todos={this.state.items}
          />


        </div>

        <footer className="footer-outer">
            Number of items completed:
            {this.state.items.filter(item => item.checked).length}
        </footer>

      </div>
    );
  }
}

export default TodoContainer;
