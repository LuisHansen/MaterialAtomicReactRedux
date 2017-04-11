import React from 'react'
import moment from 'moment'
import Card from '../../atoms/card'
import Graph from '../../atoms/graph'
import Icon from '../../atoms/icon'
var config = require('../../../../config.js');
import { getWarningsAsync } from '../../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var DashboardWarnings = React.createClass({
	componentWillMount() {
		if (this.props.warnings.loaded == false && this.props.warnings.requesting == false) {
			let TODAY = moment( new Date(config.today).toISOString());
			this.props.getWarningsAsync(TODAY.add(1, 'days').format("YYYYMMDD"), localStorage.getItem("token"));
		}
	},
	initialization() {
		setTimeout(() => {
			$(document).ready(function(){
				$('#tableWarnings tfoot th').each( function () {
					var title = $(this).text();
					$(this).html( '<input type="text" id="search' + title + '" /><label htmlFor="search' + title + '" > Buscar '+title+' </label>' );
				} );
				var table = $('#tableWarnings').DataTable({
					responsive: true
				});

				table.columns().every( function () {
					var that = this;

					$( 'input', this.footer() ).on( 'keyup change', function () {
						if ( that.search() !== this.value ) {
							that
							.search( this.value )
							.draw();
						}
					} );
				} );
			});
		},0)
	},
	populateTable() {
		let head = (<thead>
			<tr>
				<th>Master Server</th>
				<th>Nome da política</th>
				<th>Nome do cliente</th>
				<th>Job ID</th>
			</tr>
		</thead>);
		let body = [];
		let index = 0;
		this.props.warnings.data.map((warning) => {
			body.push(
				<tr key={index++} >
					<td>{warning.MasterServer}</td>
					<td>{warning.policyName}</td>
					<td>{warning.clientName}</td>
					<td>{warning.JobID}</td>
				</tr>
			);
		})
		let bodyOutter = (
			<tbody>{body}</tbody>
		);
		let footer = (
			<tfoot>
				<tr>
					<th>Master Server</th>
					<th>Nome da política</th>
					<th>Nome do cliente</th>
					<th>Job ID</th>
				</tr>
			</tfoot>
		);
		return (
			<table id="tableWarnings">
				{head}
				{bodyOutter}
				{footer}
			</table>
		);
	},
	render() {
		if (this.props.warnings.loaded) {
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
		warnings: state.warnings
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getWarningsAsync: getWarningsAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(DashboardWarnings);