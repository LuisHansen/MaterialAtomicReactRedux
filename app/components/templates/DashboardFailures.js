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
import FailuresJobType from '../organisms/failuresJobType'
import TableFailures from '../organisms/tables/tableFailures'
import FailuresMasterServer from '../organisms/charts/failuresMasterServer'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const DashboardFailures = React.createClass({
	render() { return (
		<div>
			<SummaryToday />
			<BackDashboard />
			<div className="row">
				<FailuresMasterServer />
				<FailuresJobType />
			</div>
			<TableFailures />
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

export default connect(null, null)(DashboardFailures);