import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Collapsible from 'react-collapsible';
import GetJSONApiSimple from './views/GetJSONApiSimple';
import App from './views/App';
import './index.css';
import GetJSONApiMedium from './views/GetJSONApiMedium';

ReactDOM.render(
    <React.StrictMode>
            <App />
        <Collapsible trigger="API Names">
            <GetJSONApiSimple/>
        </Collapsible>
        <Collapsible trigger="More API Stuff">
            <GetJSONApiMedium/>
        </Collapsible>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
