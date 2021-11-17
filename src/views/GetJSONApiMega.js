import { Component } from 'react';
import './GetJSONApiMega.css';
import model from '../StatsRunnerExampleResult.json';
import Collapsible from 'react-collapsible';

class GetJSONApiMega extends Component {
    render() {
        return (
            <div className="data">
                {model['API Names and Calls With Folders'].map((value) => (
                    <div>
                        <div className="Content">
                            <Collapsible trigger={Object.keys(value).toString()}>
                                <p>{Object.values(value).toString()}</p>
                            </Collapsible>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default GetJSONApiMega;