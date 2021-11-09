import { Component } from 'react';
import './GetJSONApiMega.css';
import model from '../StatsRunnerExampleResult.json';

class GetJSONApiMega extends Component {
    render() {
        return (
            <div>
                {model['API Names and Calls With Folders'].map((result, i) => (
                    <div>
                        <div className="ScriptsContent">{result['Scripts']}</div>
                        <div key={i} className="AccountingAPIContent">{result['Accounting - API']}</div>
                        <div key={"result['API - MiddleTier']+{this.i}"} className="APIMiddleTier">{result['API - MiddleTier']}</div>
                    </div>
                ))}
            </div>
        )
    }
}
export default GetJSONApiMega;