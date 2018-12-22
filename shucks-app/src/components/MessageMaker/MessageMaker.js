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
        this.props.addMessage(document.getElementsByClassName("textbox")[0].innerText, "orwinmc");

        setTimeout(function() {
          document.getElementsByClassName("textbox")[0].innerText = ""
        }, 0);
      } else {
        //document.getElementsByClassName("textbox")[0].style.height="3em";
      }
    }
  }
}

export default MessageMaker;
