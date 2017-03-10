export const changeChartType = (current) => {
	console.log(current);
	return {
		type: 'CHART_TYPE',
		payload: current
	};
}