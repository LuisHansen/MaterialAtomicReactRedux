import * as actions from '../app/actions/index'

describe('Actions', () => {

	it('should create a CHART_TYPE action', () => {
		const current = 'bar'
		const expectedAction = {
			type: 'CHART_TYPE',
			payload: current
		}
		expect(actions.changeChartType(current)).toEqual(expectedAction)
	});

	it('should create a CHART_COLORS action', () => {
		const mono = 'mono'
		const expectedAction = {
			type: 'CHART_COLORS',
			payload: mono
		}
		expect(actions.changeChartColors(mono)).toEqual(expectedAction)
	});

	it('should create a MENU action', () => {
		const page = {}
		const expectedAction = {
			type: 'MENU',
			payload: page
		}
		expect(actions.menuClick(page)).toEqual(expectedAction)
	});

	it('should create a LOAD_MENU action', () => {
		const role = 'ROLE'
		const expectedAction = {
			type: 'LOAD_MENU',
			payload: role
		}
		expect(actions.loadMenu(role)).toEqual(expectedAction)
	});

	it('should create a APPLY_SETTINGS action', () => {
		const settings = {}
		const expectedAction = {
			type: 'APPLY_SETTINGS',
			payload: settings
		}
		expect(actions.applySettings(settings)).toEqual(expectedAction)
	});

})