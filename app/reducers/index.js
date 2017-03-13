import { combineReducers } from 'redux';
import graphsReducer from './graphsReducer'
import pagesReducer from './pagesReducer'
import menuReducer from './menuReducer'

const allReducers = combineReducers({
	graphs: graphsReducer,
	page: pagesReducer,
	menu: menuReducer
});

export default allReducers;