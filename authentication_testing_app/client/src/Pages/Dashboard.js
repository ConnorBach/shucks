import React, { Component } from 'react';
//import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        Welcome<br/>
        <a href="http://localhost:3000/login">Logout</a>
      </div>
    );
  }
}

export default Dashboard;
