import React, { Component } from 'react';
//import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form id="login">
          <input type="text" id="username" tabIndex="1" placeholder="Username" />
          <input type="password" id="password" tabIndex="2" placeholder="Password" />
        </form>
        <button type="button" onClick={(e) => this.login(e)}>Login</button>
        Don't have an account? <a href="http://localhost:3000/register">Register</a>
      </div>
    );
  }

  login() {
  }
}

export default Login;
