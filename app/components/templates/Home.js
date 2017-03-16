import React from 'react'
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import Tooltip from '../atoms/tooltip'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Home = React.createClass({
	render() { return (
		<div>
			<Button click={() => this.props.changeChartType(this.props.graphs.type)}>Click me</Button>
			<Icon>add</Icon>
			<Tooltip data_position="right" data_tooltip="I am tooltip"><IconButton icon="add">Icon button</IconButton></Tooltip>
			<Spinner/>
			<div className="row">
				<div className="col s6">
					<Graph id="grafico1" width="200" height="200" config={this.props.graphs}></Graph>
				</div>
			</div>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		graphs: state.graphs
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ changeChartType: changeChartType }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Home);
