import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../atoms/button'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import IconButton from '../molecules/iconButton'
import ChartControlForm from '../organisms/chartControlForm'
import { changeChartColors } from '../../actions/index'


const Home = React.createClass({
	handleSubmit(values) {
		if (values.bnw != undefined)
			this.props.changeChartColors(values.bnw ? "mono" : "colors");
		return false;
  	},
	render() { return (
		<div>
			<div className="row">
			<div className="col s5">
				<ChartControlForm mono={this.props.graphs.mono} onSubmit={this.handleSubmit}/>
			</div>
			</div>
			<div className="row">
				<div className="col s4">
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
	return bindActionCreators({ changeChartColors: changeChartColors }, dispatch);
}


export default connect(mapStateToProps, mapDispatcherToProps)(Home);
