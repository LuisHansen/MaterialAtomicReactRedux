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
import { getSummaryAsync } from '../../actions/async'

const SummaryToday = React.createClass({
	populateData() {
		let TODAY = moment( new Date(config.today).toISOString()).add(1, 'days');
		console.log("Today is", moment(TODAY).subtract(1, 'days').format("YYYYMMDD"));
		let THIRTYDAYS = moment(TODAY).subtract(1, 'months');
		this.props.getSummaryAsync(THIRTYDAYS.format("YYYYMMDD"), TODAY.format("YYYYMMDD"), localStorage.getItem("token"))
	},
	componentWillMount() {
		this.populateData();
	},
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
	},
	today() {
		let TODAY = moment( new Date(config.today).toISOString());
		return this.props.summary.data.filter((obj) => { return obj.date == TODAY.format("YYYYMMDD")})[0];
	},
	render() {
		if (this.props.summary.requesting) {
			return (
				<div>Loading</div>
			)
		} else if (this.props.summary.loaded) {
			return (
				<div>
					<div className="row">
						<div className="col s3">
						<Card className="blue summary">
							<title><Icon className="left">history</Icon>{this.today() ? this.getPercentage() + "%" : "--"}</title>
							<div>Taxa de sucesso nas últimas 24 horas</div>
						</Card>
						</div>
						<div className="col s3">
						<Card className="green summary">
							<title><Icon className="left">thumb_up</Icon>{this.today() ? this.today().success : "--"}</title>
							<div>Número de Sucessos</div>
						</Card>
						</div>
						<div className="col s3">
						<Card className="orange summary">
							<title><Icon className="left">warning</Icon>{this.today() ? this.today().warnings : "--"}</title>
							<div>Número de Avisos</div>
						</Card>
						</div>
						<div className="col s3">
						<Card className="red summary">
							<title><Icon className="left">thumb_down</Icon>{this.today() ? this.today().failures : "--"}</title>
							<div>Número de Falhas</div>
						</Card>
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
});

function mapStateToProps(state) {
	return {
		user: state.user.user,
		summary: state.summary
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getSummaryAsync: getSummaryAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(SummaryToday);
