import React from 'react'
import moment from 'moment'
import Card from '../atoms/card'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import Chart30DaysForm from './chart30DaysForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var SummaryChart = React.createClass({
	handleSubmit(values) {
		console.log(values);
	},
	formatData() {
		let legend = [];
		this.props.summary.data.map((day) => {
			legend.push({ date: day.date, success: (day.success/(day.success + day.warnings + day.failures + day.other)*100).toPrecision(4),
			warnings: (day.warnings/(day.success + day.warnings + day.failures + day.other)*100).toPrecision(4), failures: (day.failures/(day.success + day.warnings + day.failures + day.other)*100).toPrecision(4) });
		})
		legend.sort( (a,b) => {
			if (a.date < b.date)
				return -1;
			if (a.date > b.date)
				return 1;
			return 0;
		});
		let labels = [];
		let dataSucces = [];
		let dataWarnings = [];
		let dataFailures = [];
		legend.map( (day) => {
			labels.push(moment(day.date).format("MMM DD, YYYY"));
			dataSucces.push(day.success);
			dataWarnings.push(day.warnings);
			dataFailures.push(day.failures);
		})
		return (
			{
				type: 'line',

				data: {
				    labels: labels,
				    datasets: [
				        {
				            label: "Success rate",
				            fill: true,
				            lineTension: 0.3,
				            backgroundColor: "rgba(256,256,256,0.1)",
				            borderColor: "#FEE8EA",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "#FEE8EA",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 5,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "#FEE8EA",
				            pointHoverBorderColor: "#FEE8EA",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: dataSucces,
				            spanGaps: false,
				        }, {
				            label: "Warning rate",
				            fill: true,
				            lineTension: 0.3,
				            backgroundColor: "rgba(256,256,256,0.1)",
				            borderColor: "#FEE8EA",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "#FEE8EA",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 5,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "#FEE8EA",
				            pointHoverBorderColor: "#FEE8EA",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: dataWarnings,
				            spanGaps: false,
				        }, {
				            label: "Failure rate",
				            fill: true,
				            lineTension: 0.3,
				            backgroundColor: "rgba(256,256,256,0.1)",
				            borderColor: "#FEE8EA",
				            borderCapStyle: 'butt',
				            borderDash: [],
				            borderDashOffset: 0.0,
				            borderJoinStyle: 'miter',
				            pointBorderColor: "#FEE8EA",
				            pointBackgroundColor: "#fff",
				            pointBorderWidth: 5,
				            pointHoverRadius: 5,
				            pointHoverBackgroundColor: "#FEE8EA",
				            pointHoverBorderColor: "#FEE8EA",
				            pointHoverBorderWidth: 2,
				            pointRadius: 1,
				            pointHitRadius: 10,
				            data: dataFailures,
				            spanGaps: false,
				        }
				    ]
				},
				options: {
					legend: {
						display: false,
						labels: {
							display: false
						}
					},
					scales: {
						xAxes: [{
							gridLines: {
								display: true,
								drawOnChartArea: false,
								lineWidth: 2,
								drawBorder: false
							},
							display: false,
							ticks: {
								mirror: true,
								minRotation: 45,
								display: true,
								labelOffset: 5
							},
							position: 'bottom'
						}],
						yAxes: [{
							gridLines: {
								display: false,
								drawOnChartArea: false,
								lineWidth: 2,
								drawBorder: false
							},
							display: true,
							ticks: {
								mirror: false,
								display: true,
								fontColor: '#FEE8EA'
							}
						}]
					}
				}  
			}
		);
	},
	render() {
		if (this.props.summary.loaded) {
			return (
				<div className="horizontal">
				<div className="row no-margin">
					<div className="summary30days col s12">
						<div className="chart-title">History chart <Chart30DaysForm onSubmit={this.handleSubmit} /></div>
						<div className="chartDiv">
							<Graph id="summaryChart" width="100" height="20" config={this.formatData()} />
						</div>
					</div>
				</div>
				</div>
			);
		} else {
		    return (
		    	<div>Loading...</div>
		    );
		}
	}
});

function mapStateToProps(state) {
	return {
		summary: state.summary
	}
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ getSummaryAsync: getSummaryAsync }, dispatch);
}

export default connect(mapStateToProps, null)(SummaryChart);