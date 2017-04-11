import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../atoms/button'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import IconButton from '../molecules/iconButton'
import ChartControlForm from '../organisms/forms/chartControlForm'
import MenuControlForm from '../organisms/forms/menuControlForm'
import { changeChartColors, changeCompact } from '../../actions/index'


const Home = React.createClass({
	handleSubmit(values) {
		if (values.bnw != undefined)
			this.props.changeChartColors(values.bnw ? "mono" : "colors");
		return false;
  	},
  	handleMenu(values) {
		if (values.compact != undefined)
			this.props.changeCompact(values.compact ? "compact" : "large");
		return false;
  	},
	render() { return (
		<div>
			<div className="row">
			<div className="col s5">
				<ChartControlForm mono={this.props.graphs.mono} onSubmit={this.handleSubmit}/>
			</div>
			<div className="col s5">
				<MenuControlForm compact={this.props.menu.style == "small"} onSubmit={this.handleMenu}/>
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
		graphs: state.graphs,
		menu: state.menu
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ changeChartColors: changeChartColors, changeCompact: changeCompact }, dispatch);
}


export default connect(mapStateToProps, mapDispatcherToProps)(Home);
