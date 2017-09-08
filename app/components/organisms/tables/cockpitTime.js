import React from 'react'
import moment from 'moment'
import Card from '../../atoms/card'
import Graph from '../../atoms/graph'
import Icon from '../../atoms/icon'
var config = require('../../../../config.js');
import { getCockpitAsync } from '../../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var CockpitTime = React.createClass({
	componentWillMount() {
		if (this.props.cockpit.loaded == false && this.props.cockpit.requesting == false) {
			let TODAY = moment( new Date(config.today).toISOString());
			this.props.getCockpitAsync(TODAY.format("YYYYMMDD"), localStorage.getItem("token"));
		}
	},
	initialization() {
		setTimeout(() => {
			$(document).ready(function(){
				var table = $('#cockpitTime').DataTable({
					"bFilter": false,
					"order": [[2,'desc']],
					paging: false
				});
			});
		},0)
	},
	populateTable() {
		let head = (<thead>
			<tr>
				<th>Master Server</th>
				<th>Nome da política</th>
				<th>Nome do cliente</th>
			</tr>
		</thead>);
		let body = [];
		let index = 0;
		this.props.cockpit.data.time.map((fail) => {
			body.push(
				<tr key={index++} >
					<td>{fail.MasterServer}</td>
					<td>{fail.PolicyName}</td>
					<td>{fail.ClientName}</td>
				</tr>
			);
		})
		let bodyOutter = (
			<tbody>{body}</tbody>
		);
		return (
			<table id="cockpitTime">
				{head}
				{bodyOutter}
			</table>
		);
	},
	render() {
		if (this.props.cockpit.loaded) {
			return (
				<div className="col s12 m12 l12">
					{this.populateTable()}
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
		cockpit: state.cockpit
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getCockpitAsync: getCockpitAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(CockpitTime);