import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/Home';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers);

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>
	, document.getElementById('app'));