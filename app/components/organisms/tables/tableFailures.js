import React from 'react'
import moment from 'moment'
import Card from '../../atoms/card'
import Graph from '../../atoms/graph'
import Icon from '../../atoms/icon'
var config = require('../../../../config.js');
import { getFailuresAsync } from '../../../actions/async'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

var TableFailures = React.createClass({
	componentWillMount() {
		if (this.props.failures.loaded == false && this.props.failures.requesting == false) {
			let TODAY = moment( new Date(config.today).toISOString());
			this.props.getFailuresAsync(TODAY.format("YYYYMMDD"), localStorage.getItem("token"));
		}
	},
	initialization() {
		setTimeout(() => {
			$(document).ready(function(){
				$('#tableFailures tfoot th').each( function () {
					var title = $(this).text();
					$(this).html( '<input type="text" id="search' + title + '" /><label htmlFor="search' + title + '" > Buscar '+title+' </label>' );
				} );
				var table = $('#tableFailures').DataTable({
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
				<th>Nome do agendamento</th>
				<th>Status code</th>
			</tr>
		</thead>);
		let body = [];
		let index = 0;
		this.props.failures.data.map((fail) => {
			body.push(
				<tr key={index++} >
					<td>{fail.MasterServer}</td>
					<td>{fail.policyname}</td>
					<td>{fail.clientname}</td>
					<td>{fail.schedulename}</td>
					<td>{fail.statuscode}</td>
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
				<th>Nome do agendamento</th>
				<th>Status code</th>
				</tr>
			</tfoot>
		);
		return (
			<table id="tableFailures">
				{head}
				{bodyOutter}
				{footer}
			</table>
		);
	},
	render() {
		if (this.props.failures.loaded) {
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
		failures: state.failures
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getFailuresAsync: getFailuresAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(TableFailures);