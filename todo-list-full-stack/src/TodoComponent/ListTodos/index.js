import React, {Component} from 'react';
import './style.css';
class ListTodos extends Component {
  render() {
    const { todos, onTodoClick, onDelete } = this.props;
    return (
      <ul className="Container">
        {
          todos.map((item, index) =>
          <li key={index} className="list">
            <div className="outer-div">

              <div >
                <input className="input" type="checkbox"  checked={item.checked} onChange={() => onTodoClick(item)} />
              </div>

              <div>
                <li style={checkboxStyle(item.checked)}>{item.value}</li>
              </div>

            </div><br />
          </li>
        )}
      </ul>
    )}
  }
function checkboxStyle(checked) {
  return {
      textDecoration: checked? 'line-through' : 'none',
    };
}

export default ListTodos;
