const changeChartType = (current) => {
	return {
		type: 'CHART_TYPE',
		payload: current
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

export {changeChartType, menuClick, loadMenu, loadTableData}