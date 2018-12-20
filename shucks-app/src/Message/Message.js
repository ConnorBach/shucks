import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.type = props.type
  }
  render() {
    return (
      <div className="Message">
        <div className={this.props.type}>
          {this.props.message}
        </div>
        <br clear="all" />
      </div>
    );
  }
}

export default Message;
