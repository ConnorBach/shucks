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
    console.log(loginInfo);

    var url = "http://localhost:5000/users/"+loginInfo.username;
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    //xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.responseText === null) {
          window.location = "http://localhost:3000/login";
        } else if (JSON.parse(xhr.responseText).password !== loginInfo.password) {
          window.location = "http://localhost:3000/login";
        } else {
          sessionStorage.setItem("username", username);
          window.location = "http://localhost:3000/dashboard";
        }
      }
    };
    xhr.send();
  }
}

export default Login;
