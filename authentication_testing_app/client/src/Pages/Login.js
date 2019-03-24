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
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var loginInfo = {
      username:username,
      password:password
    };

    var url = "http://localhost:5000/auth";
    //console.log(loginInfo);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        window.location = "http://localhost:3000/dashboard";
      } else {
        window.location = "http://localhost:3000/login";
      }
    };
    xhr.withCredentials = true;
    xhr.send(JSON.stringify(loginInfo));
  }
}

export default Login;
