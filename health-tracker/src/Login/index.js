import React, {Component} from 'react';

class Login extends Component{
  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Username" /><br />
          <input type="password" placeholder="password" /><br />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

import default Login;
