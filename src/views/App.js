import React, { Component } from 'react';
import GetJSONData from './getJSONData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetJSONData/>
      </div>
    );
  }
}

export default App;