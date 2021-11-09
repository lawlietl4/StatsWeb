import React, { Component } from 'react';
import GetJSONData from './getJSONData';
import './App.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stats Web</h1>
        <GetJSONData/>
      </div>
    );
  }
}

export default App;