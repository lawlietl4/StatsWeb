import { Component } from 'react';
import './GetJSONApiMega.css';
import model from '../StatsRunnerExampleResult.json';

class GetJSONApiMega extends Component {
    render() {
        return (
            <div className="data">
                {model['API Names and Calls With Folders'].map((value) => (
                    <div>
                        <div className="Content">
                            <p>{value['API - MiddleTier']}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default GetJSONApiMega;