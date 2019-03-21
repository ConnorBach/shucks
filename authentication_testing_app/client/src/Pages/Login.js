import React, { Component } from 'react';
//import './App.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>login</h1>
        <form id="login" method="post">
          <input type="text" name="username" tabIndex="1" placeholder="Username" />
          <input type="password" name="password" tabIndex="2" placeholder="Password" />
        </form>
        <button type="submit" form="login" value="Submit">Login</button><br/>
        Don't have an account? <a href="http://localhost:3000/register">Register</a>
      </div>
    );
  }
}

export default Login;
