import React, { Component } from 'react';
//import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        Welcome {sessionStorage.getItem("username")}<br/>
        <button type="button" onClick={(e) => this.logout(e)}>Logout</button>
      </div>
    );
  }

  componentWillMount() {
    var url = "http://localhost:5000/auth";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("SUCCESS: "+xhr.status);
      } else {
        console.log("This sucks... it failed: "+xhr.status);
        //window.location = 'http://localhost:3000/login'
      }
    }
    xhr.withCredentials = true;
    xhr.open("GET", url, true); // true for asynchronous
    xhr.send(null);
  }

  logout() {
    //sessionStorage.removeItem("username");
    window.location = "http://localhost:3000/login";
  }
}

export default Dashboard;
