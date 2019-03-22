import React, { Component } from 'react';
//import './App.css';

class Register extends Component {
  render() {
    return (
      <div className="Register">
      <h1>Register</h1>
        <form id="register">
          <input type="text" id="firstname" tabIndex="1" placeholder="First Name" required/><br />
          <input type="text" id="lastname" tabIndex="2" placeholder="Last Name" required/><br />
          <input type="text" id="username" tabIndex="3" placeholder="Username" required/><br />
          <input type="password" id="password" tabIndex="4" placeholder="Password" required/><br />
        </form>
        <button type="button" onClick={(e) => this.register(e)}>Register</button>

        <br />
        <br />
        Already Have an account: <a href="http://localhost:3000/login">Login</a>
      </div>
    );
  }

  register() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var registrationInfo = {
      firstname:firstname,
      lastname:lastname,
      username:username,
      password:password
    };
    console.log(registrationInfo);

    var url = "http://localhost:5000/users";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", 'application/json');
    xhr.onload = function () {
      window.location = "http://localhost:3000/login";
    };
    xhr.send(JSON.stringify(registrationInfo));
  }
}

export default Register;
