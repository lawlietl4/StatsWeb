import React, { Component } from 'react';

import data from './example.json';
// get posts from online api
// it's return a json file
class GetJSONData extends Component {
  render() {
    // const { examples } = this.state;
    return (
      <div>
        <ul className="item">
          {
            data.Examples.map(example => (
              <li key={ example.id } align="start">
                <div>
                  <p className="title">{ example.name }</p>
                  <p className="body">{ example.description }</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
export default GetJSONData;