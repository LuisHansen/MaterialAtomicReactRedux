import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/pages/Index';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>
	, document.getElementById('app'));