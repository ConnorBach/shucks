import React, { Component } from 'react';
import './App.css';
import MessageBoard from '../MessageBoard/MessageBoard';
import MessageMaker from '../MessageMaker/MessageMaker';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MessageBoard />
      </div>
    );
  }
}

export default App;
