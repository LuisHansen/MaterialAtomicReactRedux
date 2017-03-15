import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import graphsReducer from './graphsReducer'
import pagesReducer from './pagesReducer'
import menuReducer from './menuReducer'
import tablesReducer from './tablesReducer'

const allReducers = combineReducers({
	graphs: graphsReducer,
	page: pagesReducer,
	menu: menuReducer,
	table: tablesReducer,
	form: formReducer
});

export default allReducers;