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
import ThirtyDaysChart from '../organisms/charts/thirtyDaysChart'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const DashboardSuccess = React.createClass({
	render() { return (
		<div>
			<SummaryToday />
			<BackDashboard></BackDashboard>
			<ThirtyDaysChart />
			<div className="row">
				<div className="col s12">
					<Graph id="grafico1" width="200" height="100" config={this.props.graphs}></Graph>
				</div>	
			</div>

		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		graphs: state.graphs
	}
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ changeChartType: changeChartType }, dispatch);
}

export default connect(mapStateToProps, null)(DashboardSuccess);