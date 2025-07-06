import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// <React.StricMode> 이녀석때문에 계속 두 번씩 실행되고 있었네.... 괜히 엄한 곳에서 설정함
//React가 개발자모드에서 일부로 체크할려고 두 번 실행하는 거였구나..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
