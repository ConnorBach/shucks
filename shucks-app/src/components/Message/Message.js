import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.username = props.username
  }
  render() {
    console.log(this.props.msg);
    return (
      <div className="Message">
        <div className={this.props.username == "orwinmc" ? "sent" : "recieved"}>
          <div className="messageBubble">
            {this.props.msg}
          </div>
          <br clear="all" />
          <div className="userInfo">
            {this.props.username}
          </div>
          <br clear="all" />
        </div>
      </div>
    );
  }
}

export default Message;
