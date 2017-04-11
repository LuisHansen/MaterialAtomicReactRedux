const changeChartType = (current) => {
	return {
		type: 'CHART_TYPE',
		payload: current
	};
}

const changeChartColors = (mono) => {
	return {
		type: 'CHART_COLORS',
		payload: mono
	};
}

const menuClick = (page) => {
	return {
		type: 'MENU',
		payload: page
	};
}

const loadMenu = (role) => {
	return {
		type: 'LOAD_MENU',
		payload: role
	};
}

const loadTableData = () => {
	return {
		type: 'LOAD_TABLE',
		payload: null
	};
}

const applySettings = (settings) => {
	return {
		type: 'APPLY_SETTINGS',
		payload: settings
	};
}


const changeCompact = (compact) => {
	return {
		type: 'CHANGE_COMPACT',
		payload: compact
	}
}

const login = (payload) => {
	return {
		type: 'LOGIN',
		status: payload.status,
		payload: { token: payload.token, user: payload.user }
	}
}

const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

const fullscreen = (payload) => {
	return {
		type: 'FULLSCREEN',
		payload: payload
	}
}

const init = (page) => {
	return {
		type: 'INIT',
		payload: page
	}
}

const getLicenses = (payload) => {
	return {
		type: 'GET_LICENSES',
		status: payload.status,
		payload: payload.licenses
	}
}

const getWarnings = (payload) => {
	return {
		type: 'GET_WARNINGS',
		status: payload.status,
		payload: payload.data
	}
}


const fetchSummaryToday = (payload) => {
	return {
		type: 'SUMMARY_TODAY',
		status: payload.status,
		data: payload.data
	}
}

const showAccount = () => {
	return {
		type: 'TOGGLE_ACCOUNT_INFO'
	}
}

const getDrilldown = (payload) => {
	return {
		type: 'GET_DRILLDOWN',
		status: payload.status,
		data: payload.data
	}
}

const getFailures = (payload) => {
	return {
		type: 'GET_FAILURES',
		status: payload.status,
		data: payload.data
	}
}

export { changeChartType, changeChartColors, menuClick, loadMenu, loadTableData,
	applySettings, changeCompact, login, logout, fullscreen, init, getLicenses,
	fetchSummaryToday, showAccount, getDrilldown, getWarnings, getFailures }