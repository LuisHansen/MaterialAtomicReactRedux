import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import Table from '../atoms/table'
import Card from '../atoms/card'
import { connect } from 'react-redux'
import { loadTableData } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Payments = React.createClass({
	render() { return (
		<div>
			<Button click={() => {this.props.loadTableData()}}>Load data</Button>
			<Spinner className="center"></Spinner>
			<Table id="table1" config={this.props.table}>
				<thead>
					<tr>
						<td>Testing</td>
						<td>Testing2</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</Table>
			<Card><title>Card title</title><p>Card content.</p><p>Can be anything.</p></Card>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		table: state.table
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ loadTableData: loadTableData }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Payments);
