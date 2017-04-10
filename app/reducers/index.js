import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import graphReducer from './graphReducer'
import graphsReducer from './graphsReducer'
import pagesReducer from './pagesReducer'
import menuReducer from './menuReducer'
import drilldownReducer from './drilldownReducer'
import warningsReducer from './warningsReducer'
import tablesReducer from './tablesReducer'
import app from './app'
import licensesReducer from './licensesReducer'
import summaryReducer from './summaryReducer'


const lastAction = function (state=null, action) {
	return action;
}

const allReducers = combineReducers({
	graphs: graphsReducer,
	graph: graphReducer,
	page: pagesReducer,
	menu: menuReducer,
	table: tablesReducer,
	form: formReducer,
	user: auth,
	lastAction: lastAction,
	appSettings: app,
	licenses: licensesReducer,
	summary: summaryReducer,
	drilldown: drilldownReducer,
	warnings: warningsReducer
});

export default allReducers;