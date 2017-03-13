import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import Table from '../atoms/table'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Payments = React.createClass({
	render : function() { return (
		<div>
			<Spinner className="center"></Spinner>
			<Table id="table1">
				<thead>
					<tr>
						<td>Testing</td>
						<td>Testing2</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</Table>
		</div>
		);
	}
});


function mapDispatcherToProps(dispatch) {
	
}

export default connect(null, null)(Payments);