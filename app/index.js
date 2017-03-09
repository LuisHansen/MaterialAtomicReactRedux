import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/pages/Home';
import { createStore } from 'redux';

const store = createStore();

ReactDOM.render(<Home />, document.getElementById('app'));