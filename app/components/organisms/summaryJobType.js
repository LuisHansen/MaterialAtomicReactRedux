import React from 'react'
import moment from 'moment'
import Card from '../atoms/card'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
var config = require('../../../config.js');
import { getDrilldownAsync } from '../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var SummaryJobType = React.createClass({
	componentWillMount() {
		if (this.props.drilldown.loaded == false && this.props.drilldown.requesting == false) {
			let TODAY = moment( new Date(config.today).toISOString());
			this.props.getDrilldownAsync(TODAY.format("YYYYMMDD"), TODAY.add(1, 'days').format("YYYYMMDD"), localStorage.getItem("token"));
		}
	},
	initialization() {
		setTimeout(() => {
			$(document).ready(function(){
				$('ul.tabs').tabs();
				$('ul.tabs').tabs('select_tab', 'chart-jobtype');
				$('#tableJobType').DataTable({
					"bFilter": false,
					"order": [[1,'desc']]
				});
			});
		},0)
	},
	populateTable() {
		let jobs = {};
		this.props.drilldown.data.map((job) => {
			let name = job.name ? job.name : 'Unknown'
			jobs.hasOwnProperty(name) ? jobs[name] += job.failures + job.success + job.warnings : jobs[name] = job.failures + job.success + job.warnings;
		})
		let head = (<thead>
			<tr>
				<th>Job type</th>
				<th>Number of jobs</th>
			</tr>
		</thead>);
		let body = [];
		let index = 0;
		for (var job in jobs) {
			body.push(
				<tr key={index++} >
					<td>{job}</td>
					<td>{jobs[job]}</td>
				</tr>
			);
		}
		let bodyOutter = (
			<tbody>{body}</tbody>
		);
		return (
			<table id="tableJobType">
				{head}
				{bodyOutter}
			</table>
		);
	},
	formatData() {
		let legend = {};
		this.props.drilldown.data.map((job) => {
			let name = job.name ? job.name : 'Unknown'
			legend.hasOwnProperty(name) ? legend[name] += job.failures + job.success + job.warnings : legend[name] = job.failures + job.success + job.warnings;
		})
		let labels = [];
		let data = [];
		for (var name in legend) {
			labels.push(name);
			data.push(legend[name]);
		}
		return (
			{
				type: 'pie',

				data: {
				    labels: labels,
				    datasets: [
				        {
				            data: data,
				            backgroundColor: [
				            	'#7CB5EC',
				            	'#434348',
				            	'#F44336',
				            	'#9C27B0',
				            	'#3F51B5',
				            	'#009688',
				            	'#4CAF50',
				            	'#CDDC39',
				            	'#FFEB3B',
				            	'#FF9800',
				            	'#FF5722',
				            	'#795548'

				            ]
				        }
				    ]
				},

				options: {
					tooltips: {
					  callbacks: {
					    label: function(tooltipItem, data) {
					      //get the concerned dataset
					      var dataset = data.datasets[tooltipItem.datasetIndex];
					      //calculate the total of this data set
					      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					        return previousValue + currentValue;
					      });
					      //get the current items value
					      var currentValue = dataset.data[tooltipItem.index];
					      //calculate the percentage based on the total and current item, also this does a rough rounding to give a whole number
					      var percentage = (((currentValue/total) * 100).toPrecision(4));

					      var tooltip = [];
					      tooltip.push(" " + data.labels[tooltipItem.index]);
					      tooltip.push(" " + percentage + "% (" + currentValue + ")");

					      return tooltip;
					    }
					  }
					} 
				}
			}
		);
	},
	render() {
		if (this.props.drilldown.loaded) {
			return (
				<div className="col s12 m6 l6">
					<div className="card">
						<div className="card-content">
							<span className="card-title">By job type</span>
						</div>
						<div className="card-tabs">
							<ul className="tabs tabs-fixed-width">
								<li className="tab active"><a href="#chart-jobtype">Chart</a></li>
								<li className="tab"><a href="#table-jobtype">Table</a></li>
							</ul>
						</div>
						<div className="card-content">
							<div id="chart-jobtype"><Graph id="jobTypeChart" width="100" height="100" config={this.formatData()} /></div>
							<div id="table-jobtype">
								{this.populateTable()}
							</div>
						</div>
					</div>
					{this.initialization()}
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
		drilldown: state.drilldown
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getDrilldownAsync: getDrilldownAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(SummaryJobType);