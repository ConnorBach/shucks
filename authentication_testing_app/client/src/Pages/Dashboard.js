import React, { Component } from 'react';
//import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        Welcome<br/>
        <button type="button" onClick={(e) => this.logout(e)}>Logout</button>
      </div>
    );
  }

  logout() {
    var url = "http://localhost:5000/logout";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          window.location = "http://localhost:3000/login";
        } else {
          console.log("ERROR");
        }
      }
    }
    xhr.withCredentials = true;
    xhr.open("GET", url, true); // true for asynchronous
    xhr.send(null);
  }
}

export default Dashboard;
