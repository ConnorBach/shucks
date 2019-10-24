import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <nav class="navbar navbar-dark bg-primary">
          <a class="navbar-brand" href="/login">Login</a>
      </nav>
      <Route path='/login' exact component={Login} />
      <Route path='/dashboard/:username' exact component={Login} />
    </Router>
  );
}

export default App;
