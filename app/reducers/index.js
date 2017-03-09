import { combineReducers } from 'redux';
import graphsReducer from './graphsReducer'

const allReducers = combineReducers({
	graphs: graphsReducer
});