import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Collapsible from 'react-collapsible';
import './index.css';
import GetJSONApiMega from './views/GetJSONApiMega';
import GetJSONData from './views/getJSONData';

ReactDOM.render(
    <React.StrictMode>
        <h1 className="navBar">AdvancedMD API Statistics</h1>
        <GetJSONData />
        <div className="information">
            <Collapsible trigger="API Names and Calls">
                <GetJSONApiMega />
            </Collapsible>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
