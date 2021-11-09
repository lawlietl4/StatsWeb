import React, { Component } from 'react';
import './getJSONData.css';

import model from './StatsRunnerExampleResult.json';
// get posts from online api
// it's return a json file
class GetJSONData extends Component {
  render() {
    // const { examples } = this.state;
    return (
      <div className="ParentElement">
        <p>Number of APIs: { model['Number of APIs'] }</p>
        {
          model['API Names'].map(stuff => (
            <p>
              { stuff }
            </p>
          ))
        }
      </div>
    );
  }
}
export default GetJSONData;