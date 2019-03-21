import React, { Component } from 'react';
import './App.css';
import MessageBoard from '../MessageBoard/MessageBoard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MessageBoard />
        <Footer />
      </div>
    );
  }
}

export default App;
