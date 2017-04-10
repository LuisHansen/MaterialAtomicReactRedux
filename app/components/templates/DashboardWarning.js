import React from 'react'
import Button from '../atoms/button'
import Card from '../atoms/card'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import BackDashboard from '../molecules/backDashboard'
import Graph from '../atoms/graph'
import Tooltip from '../atoms/tooltip'
import RealTimeJobs from '../organisms/realTimeJobs'
import SummaryToday from '../organisms/summaryToday'
import SummaryChart from '../organisms/summaryChart'
import DashboardWarnings from '../organisms/dashboardWarnings'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const DashboardWarning = React.createClass({
	render() { return (
		<div>
			<SummaryToday />
			<BackDashboard></BackDashboard>
			<DashboardWarnings />
		</div>
		);
	}
});

function mapStateToProps(state) {
	// return {
	// 	graphs: state.graphs
	// }
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ changeChartType: changeChartType }, dispatch);
}

export default connect(null, null)(DashboardWarning);