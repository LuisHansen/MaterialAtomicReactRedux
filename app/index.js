import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import Index from './components/pages/Index';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
	allReducers,
	compose(applyMiddleware(
		thunkMiddleware
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

let patt = /@@/i;
let history = [];

store.subscribe(() => {
	if (!patt.test(store.getState().lastAction.type) &&
		store.getState().lastAction.type != 'LOGIN' &&
		store.getState().lastAction.type != 'LOAD_MENU') {
		if (history.lenght > 20) {
			history.shift();
		}
		history.push(store.getState());
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>
	, document.getElementById('app'));