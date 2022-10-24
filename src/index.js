import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// safari polyfill
function calculateVh() {
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', vh + 'px');
}

calculateVh();

window.addEventListener('resize', calculateVh);
window.addEventListener('orientationchange', calculateVh);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
