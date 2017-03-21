import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import graphsReducer from './graphsReducer'
import pagesReducer from './pagesReducer'
import menuReducer from './menuReducer'
import tablesReducer from './tablesReducer'


const lastAction = function (state=null, action) {
	return action;
}

const allReducers = combineReducers({
	graphs: graphsReducer,
	page: pagesReducer,
	menu: menuReducer,
	table: tablesReducer,
	form: formReducer,
	user: auth,
	lastAction: lastAction
});

export default allReducers;