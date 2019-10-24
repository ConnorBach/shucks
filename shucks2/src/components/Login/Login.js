import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Login = () => {
  return (
    <form>
      <div class="form-group">
        <label> Username </label>
        <input class="form-control" id="username" placeholder="Enter Username"/>
        <label> Password </label>
        <input class="form-control" id="password" placeholder="******"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}

export default Login;
