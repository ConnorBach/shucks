import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom'

class ProtectedRoute extends Route {
  constructor(props) {
    super(props);
  }

  isAuthenticated() {
    // NEEDS TO BE synchronous TO PREVENT EARLY RESPONSE
    var url = "http://localhost:5000/auth";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("GET", url, false); // true for asynchronous
    xhr.send(null);

    return (xhr.status === 200);
  }

  render() {
    if (this.isAuthenticated()) {
      return (<Route {...this.props} />);
    } else {
      return (<Redirect to={{ pathname: "/login"}}/>);
    }
  }
}

export default ProtectedRoute;
