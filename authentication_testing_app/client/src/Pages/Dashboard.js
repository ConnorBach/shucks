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

  logout() {
    //sessionStorage.removeItem("username");
    window.location = "http://localhost:3000/login";
  }
}

export default Dashboard;
