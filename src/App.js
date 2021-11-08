//eslint-disable-project
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.js';
import GetJSONData from './getJSONData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">Local Storage</h1>
        <GetJSONData/>
      </div>
    );
  }
}

export default App;