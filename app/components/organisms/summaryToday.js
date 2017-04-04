import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
var config = require('../../../config.js');
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import Card from '../atoms/card'
import Icon from '../atoms/icon'
import IconMenu from '../molecules/iconMenu'
import { menuClick } from '../../actions/index'
import { getSummaryAsync } from '../../actions/async'

class SummaryToday extends React.PureComponent {
	populateData() {
		let TODAY = moment( new Date(config.today).toISOString()).add(1, 'days');
		console.log("Today is", moment(TODAY).subtract(1, 'days').format("DD/MM/YYYY"));
		let THIRTYDAYS = moment(TODAY).subtract(1, 'months');
		this.props.getSummaryAsync(THIRTYDAYS.format("YYYYMMDD"), TODAY.format("YYYYMMDD"), localStorage.getItem("token"))
	}
	componentWillMount() {
		this.populateData();
	}
	getPercentage() {
		let data = this.props.summary.data;
		data = data.reduce(function(previousValue, currentValue, currentIndex, array){
			previousValue[currentValue.date] = currentValue;
			return previousValue;
		}, {});
		let TODAY = moment( new Date(config.today).toISOString());
		let vm = this.props.summary.data.filter((obj) => { return obj.date == TODAY.format("YYYYMMDD")})[0];
		if (vm) {
			let average = ((vm.success/ (vm.success+ vm.warnings + vm.failures))* 100).toPrecision(4);
			return average;
		}
	}
	today() {
		let TODAY = moment( new Date(config.today).toISOString());
		return this.props.summary.data.filter((obj) => { return obj.date == TODAY.format("YYYYMMDD")})[0];
	}
	render() {
		if (this.props.summary.requesting) {
			return (
				<div>Loading</div>
			)
		} else if (this.props.summary.loaded) {
			return (
				<div className="horizontal summary-container">
					<div className="row no-margin">
						<div className="col l3 m6 s12 col-summary">
						<div className="first summary" onClick={() => this.props.menuClick({title: "Dashboard", template: "DashboardSummary", icon:"dashboard"})}>
							<div className="title-summary"><Icon className="big left">history</Icon></div>
							<div className="content-summary"><div className="id-summary">Taxa de sucesso</div>
							<div className="stats-summary">{this.today() ? this.getPercentage() + "%" : "--"}</div>
							</div>

						</div>
						</div>
						<div className="col l3 m6 s12 col-summary">
						<div className="second summary" onClick={() => this.props.menuClick({title: "Dashboard", template: "DashboardSuccess", icon:"dashboard"})}>
							<div className="title-summary"><Icon className="big left">thumb_up</Icon></div>
							<div className="content-summary"><div className="id-summary">Jobs com sucesso</div>
							<div className="stats-summary">{this.today() ? this.today().success : "--"}</div>
							</div>

						</div>
						</div>
						<div className="col l3 m6 s12 col-summary">
						<div className="third summary" onClick={() => this.props.menuClick({title: "Dashboard", template: "DashboardWarning", icon:"dashboard"})}>
							<div className="title-summary"><Icon className="big left">warning</Icon></div>
							<div className="content-summary"><div className="id-summary">Jobs com aviso</div>
							<div className="stats-summary">{this.today() ? this.today().warnings : "--"}</div>
							</div>

						</div>
						</div>
						<div className="col l3 m6 s12 col-summary">
						<div className="fourth summary" onClick={() => this.props.menuClick({title: "Dashboard", template: "DashboardFailures", icon:"dashboard"})}>
							<div className="title-summary"><Icon className="big left">thumb_down</Icon></div>
							<div className="content-summary"><div className="id-summary">Jobs com falha</div>
							<div className="stats-summary">{this.today() ? this.today().failures : "--"}</div>
							</div>

						</div>
						</div>
					</div>
				</div>
			)
		}
		return (
			<div>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user.user,
		summary: state.summary,
		page: state.page
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getSummaryAsync: getSummaryAsync, menuClick: menuClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(SummaryToday);
