import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message message="hi"/>
        <Message message="asdfasf" />
        <Message message="testing123" />
      </div>
    );
  }
}

export default App;
