import React, { Component } from 'react';
import './MessageBoard.css';
import Message from '../Message/Message';

class MessageBoard extends Component {
  render() {
    return (
      <div className="MessageBoard">
        <Message message="hi" type="recieved"/>
        <Message message="asdfasfasdfsadfsadfasfs asdfsadfd ssa ssdfdfs  dfs dsf ds dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="recieved"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="sent"/>
        <Message message="testing123 sdf ssdfdsf dfs dfssd sdsdf dfs dfs" type="recieved"/>
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

export default MessageBoard;
