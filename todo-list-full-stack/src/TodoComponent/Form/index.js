import React, {Component} from 'react';

class Form extends Component{
  state = {
    inputTodo: ''
  }
  handleChange = (e) =>{
    this.setState({
      inputTodo: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      inputTodo: ''
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputTodo} placeholder="Enter Your Todo" />
          <button>Post</button>
        </form>
      </div>
    )
  }
}

export default Form;
