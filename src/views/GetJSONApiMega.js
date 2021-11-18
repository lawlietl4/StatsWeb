import { Component } from 'react';
import './GetJSONApiMega.css';
import model from '../StatsRunnerExampleResult.json';
import Collapsible from 'react-collapsible';
import 'bootstrap/dist/css/bootstrap.min.css';

class GetJSONApiMega extends Component {
    render() {
        return (
            <div className="data">
                {model['API Names and Calls With Folders'].map((value) => (
                    <div>
                        <div class="dropdown-menu" className="Content">
                            <Collapsible className="APINames" trigger={Object.keys(value).toString()}>
                                <p class="dropdown-item" className="APIValues">{JSON.stringify(Object.values(value)).replace(/[[+"+\]]/g,'').replace(/{/g, '(').replace(/}/g,')').replace(/,/g,', ').replace(/:/g,': ')}</p>
                            </Collapsible>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default GetJSONApiMega;