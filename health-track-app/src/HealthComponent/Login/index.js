import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>

        <h1>Register</h1>
        <form>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Login;
