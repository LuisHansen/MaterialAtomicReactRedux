import React from 'react'
import moment from 'moment'
import Card from '../../atoms/card'
import Graph from '../../atoms/graph'
import Icon from '../../atoms/icon'
var config = require('../../../../config.js');
import { getDrilldownAsync } from '../../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var SummaryMasterServer = React.createClass({
	componentWillMount() {
		if (this.props.drilldown.loaded == false && this.props.drilldown.requesting == false) {
			let TODAY = moment( new Date(config.today).toISOString());
			this.props.getDrilldownAsync(TODAY.format("YYYYMMDD"), TODAY.add(1, 'days').format("YYYYMMDD"), localStorage.getItem("token"));
		}
	},
	formatData() {
		let legend = {}
		this.props.drilldown.data.map((job) => {
			legend.hasOwnProperty(job.server) ? legend[job.server] += job.failures + job.success + job.warnings : legend[job.server] = job.failures + job.success + job.warnings;
		})
		let labels = [];
		let data = [];
		for (var server in legend) {
			labels.push(server);
			data.push(legend[server]);
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
				            	'#434348'
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
					      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
					      var precentage = (((currentValue/total) * 100).toPrecision(4));

					      var tooltip = [];
					      tooltip.push(" " + precentage + "% (" + currentValue + ")");

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
					<Card>
						<title>By master server</title>
						<Graph id="masterServerChart" width="100" height="100" config={this.formatData()} />
					</Card>
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

export default connect(mapStateToProps, mapDispatcherToProps)(SummaryMasterServer);