import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message message="hi" type="recieved"/>
        <Message message="asdfasfasdfsadfsadfasfs asdfsadfd ssa ssdfdfs  dfs dsf ds dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="recieved"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="recieved"/>
      </div>
    );
  }
}

export default App;
