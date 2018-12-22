import React, { Component } from 'react';
import './MessageBoard.css';
import Message from '../Message/Message';
import MessageMaker from '../MessageMaker/MessageMaker';

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{msg:"How are you?", username:"cbach"}, {msg:"gucci", username:"orwinmc"}]
    };
  }

  addMessage(msg, username) {
    const messagesCopy = this.state.messages.slice();
    messagesCopy.push({msg:msg, username:username});
    this.setState({
      messages: messagesCopy
    });
  }

  render() {
    const msgs = [];

    for (var i = 0; i < this.state.messages.length; i += 1) {
      msgs.push(<Message key={i} msg={this.state.messages[i].msg} username={this.state.messages[i].username}/>);
    }

    return (
      <div className="MessageBoard">
        {msgs}
        <MessageMaker addMessage={(msg,username) => this.addMessage(msg,username)}/>
      </div>
    );
  }
}

export default MessageBoard;
