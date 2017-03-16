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

const loadMenu = () => {
	return {
		type: 'LOAD_MENU',
		payload: null
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

export { changeChartType, changeChartColors, menuClick, loadMenu, loadTableData, applySettings }