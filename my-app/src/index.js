import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const onRedirectCallback = (appState) => {
	try{
		let path = appState && appState.targetUrl? appState.targetUrl : window.location.origin
		window.history.pushState(null, "", path);
	}
	catch(err){
		console.log(err);
	}	
}

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain = "dev-w1z8wy-p.us.auth0.com"
			clientId="RHaM86sHqrwsD6rk8wTpi1YsU2z9FyhQ"
			redirectUri={window.location.origin}
			audience="https://quickstarts/api"
    		scope="read:current_user update:current_user_metadata"
			onRedirectCallback={onRedirectCallback}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
