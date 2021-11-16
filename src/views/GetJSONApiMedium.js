import { Component } from 'react';
import model from '../StatsRunnerExampleResult.json';
import './GetJSONApiMedium.css';

class GetJSONApiMedium extends Component {
    render() {
        return (
            <div>
                <h1>API - MiddleTier</h1>
                {model['API Names and Calls With Folders'].map((value) => (
                    <div>
                        <div className="information">
                            <p>{value['API - MiddleTier']}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default GetJSONApiMedium;