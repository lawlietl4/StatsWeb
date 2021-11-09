import { Component } from 'react';
import model from '../StatsRunnerExampleResult.json';
import './GetJSONApiMedium.css';

class GetJSONApiMedium extends Component{
    render(){
        return(
            <div>
                {model['API Names and Calls'].map(result=>(
                    <p>
                        {result['API - MiddleTier']}
                    </p>
                ))}
            </div>
        )
    }
}

export default GetJSONApiMedium;