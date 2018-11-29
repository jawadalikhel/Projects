import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <div>
        <h1>Login</h1>
        <form>
          <h1>Login</h1>
          <input type="text" placeholder="Username" /><br />
          <input type="password" placeholder="Password" /><br />
          <button>Login</button>

          <h1>Register</h1>
          <input type="text" placeholder="Username" /><br />
          <input type="password" placeholder="Password" /><br />
          <button>Register</button>
        </form>
      </div>
    )
  }
}

export default Login;
