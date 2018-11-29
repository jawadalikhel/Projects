import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <div>
        <form>
        <h4>Login</h4>
          <input type="text" placeholder="Username" /><br />
          <input type="password" placeholder="password" /><br />
          <button>Login</button>
          <br/>
          <h3>Register</h3>
          <input type="text" placeholder="Username" /><br />
          <input type="password" placeholder="password" /><br />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
