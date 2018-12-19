import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Message">
        <div className="recieved">
          {this.props.message}
        </div>
        <br clear="all" />
      </div>

    );
  }
}

export default Message;
