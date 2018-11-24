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
    <h1>You have no more todos lefts</h1>
  )
    return(
      <div>
        {list}
      </div>
    )
}

export default ListTodos;
