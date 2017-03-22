import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../atoms/button'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import Card from '../atoms/card'
import IconButton from '../molecules/iconButton'
import ChartControlForm from '../organisms/chartControlForm'
import MenuControlForm from '../organisms/menuControlForm'
import { changeChartColors, changeCompact } from '../../actions/index'


const Admin = React.createClass({
	render() { return (
		<div>
			<div className="row">
				<div className="col s12">
					<Card>
						<title>Testing</title>
						<p>Testing</p>
					</Card>
				</div>
			</div>
		</div>
		);
	}
});

function mapStateToProps(state) {
	// return {
	// 	graphs: state.graphs,
	// 	menu: state.menu
	// }
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ changeChartColors: changeChartColors, changeCompact: changeCompact }, dispatch);
}


export default connect(null, null)(Admin);
