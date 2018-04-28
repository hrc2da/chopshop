import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import initState from './states/default.js';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chopShopReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';

function configureStore(preloadedState) {
	return createStore(
		chopShopReducer,
		preloadedState,
		applyMiddleware(
			loggerMiddleware
		)
	);
}
let loggerMiddleware = createLogger();
let store = configureStore(initState);



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
