import { Component } from "react";
import model from '../StatsRunnerExampleResult.json';
import './GetJSONApiSimple.css';

class GetJSONApiSimple extends Component {
    render() {
        return (
            <ol>
                {model['API Names'].map(result => (
                    <li>
                        <p>{result}</p>
                    </li>
                ))}
            </ol>);
    }
}

export default GetJSONApiSimple;