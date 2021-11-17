import { Component } from 'react';
import './GetJSONApiMega.css';
import model from '../StatsRunnerExampleResult.json';
import Collapsible from 'react-collapsible';

class GetJSONApiMega extends Component {
    render() {
        return (
            <div className="data">
                {model['API Names and Calls With Folders'].map((value) => (
                    <div class="table">
                        <div class="table-row" className="Content">
                            <Collapsible className="APINames" trigger={Object.keys(value).toString()}>
                                <p className="APIValues">{JSON.stringify(Object.values(value))}</p>
                            </Collapsible>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default GetJSONApiMega;