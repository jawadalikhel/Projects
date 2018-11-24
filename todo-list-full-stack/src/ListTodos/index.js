import React, {Component} from 'react';

const ListTodos = ({showTodo, DeleteTodo}) => {
  const list = showTodo.length ? (
    showTodo.map(todo =>{
      return(
        <div key={todo.id}>
          <h3 onClick={() =>{DeleteTodo(todo.id)}}>{todo.inputTodo}</h3>
        </div>
      )
    })
  ): (
    <p>You have no more todos lefts</p>
  )
    return(
      <div>
        <h1>List ToDo</h1>
        {list}
      </div>
    )
}

export default ListTodos;
