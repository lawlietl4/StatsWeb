import React, { Component } from 'react';
import './getJSONData.css';

import model from '../StatsRunnerExampleResult.json';
// get posts from online api
// it's return a json file
class GetJSONData extends Component {
  render() {
    // const { examples } = this.state;
    return (
      <div>
        <p>Number of API Calls: {model['Number Of API Calls']}</p>
        <p>Number of APIs: {model['Number Of APIs']}</p>
        <p>Average Number of API Calls: {model['Average Calls Per API']}</p>
      </div>
    );
  }
}
export default GetJSONData;