import React, { Component } from 'react';
import './MessageMaker.css';

class MessageMaker extends Component {
  render() {
    return (
      <div className="MessageMaker">
        <div className="textbox" onKeyDown={(e) => this.enterCheck(e)} contentEditable="true">
        </div>
      </div>
    );
  }

  enterCheck(e) {
    if (e.keyCode == 13) {
      if (!e.shiftKey) {
        let textbox = document.getElementsByClassName("textbox")[0]
        this.props.addMessage(textbox.innerText, "orwinmc");
        setTimeout(function() {
          textbox.innerText = "";
        }, 0);
      }
    }
  }
}

export default MessageMaker;
