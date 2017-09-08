import React from 'react'
import moment from 'moment'
import Card from '../atoms/card'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import CockpitFailures from './tables/cockpitFailures'
import CockpitSpace from './tables/cockpitSpace'
import CockpitTime from './tables/cockpitTime'
import CockpitErrors from './tables/cockpitErrors'
var config = require('../../../config.js');
import { getDrilldownAsync } from '../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var CockpitTables = React.createClass({
	initialization() {
		setTimeout(() => {
			$(document).ready(function(){
				$('ul.tabs').tabs();
				$('ul.tabs').tabs('select_tab', 'cockpit-failures');
			});
		},0)
	},
	render() {
		return (
				<div>
					<div className="row">
						<div className="col s12">
							<ul className="tabs tabs-fixed-width">
								<li className="tab active"><a href="#cockpit-failures">Top 10 falhas</a></li>
								<li className="tab"><a href="#cockpit-space">Top 10 que mais consomem</a></li>
								<li className="tab"><a href="#cockpit-time">Top 10 mais devagar</a></li>
								<li className="tab"><a href="#cockpit-errors">Top 10 mais erros</a></li>
							</ul>
						</div>
					</div>
					<div id="cockpit-failures">
						<CockpitFailures />
					</div>
					<div id="cockpit-space">
						<CockpitSpace />
					</div>
					<div id="cockpit-time">
						<CockpitTime />
					</div>
					<div id="cockpit-errors">
						<CockpitErrors />
					</div>
					{this.initialization()}
				</div>
		)
	}
});

export default CockpitTables;