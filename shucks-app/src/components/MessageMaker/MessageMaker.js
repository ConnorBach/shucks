import React, { Component } from 'react';
import './MessageMaker.css';

class MessageMaker extends Component {
  render() {
    return (
      <div className="MessageMaker">
        <div className="textbox" onKeyPress={() => this.enterCheck()} contentEditable="true">
        </div>
      </div>
    );
  }

  enterCheck() {
      var event = window.event;

      if (event.keyCode === 13 && !event.shiftKey) {
        let textbox = document.getElementsByClassName("textbox")[0];
        this.props.addMessage(textbox.innerText, "orwinmc");
        textbox.innerHTML = "";
      }
  }
}

export default MessageMaker;
