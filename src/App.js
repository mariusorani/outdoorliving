import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
