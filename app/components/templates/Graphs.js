import React from 'react'
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import Tooltip from '../atoms/tooltip'
import { connect } from 'react-redux'
import { changeChartColors } from '../../actions/index'
import { bindActionCreators } from 'redux'
import ChartControlForm from '../organisms/chartControlForm'


const Home = React.createClass({
	handleSubmit: function(values) {
		if (values) {
			this.props.changeChartColors(values.bnw ? "mono" : "colors");
		}
  	},
	render : function() { return (
		<div>
			<ChartControlForm mono={this.props.graphs.mono} onSubmit={this.handleSubmit}/>
			<Graph id="grafico1" width="200" height="200" config={this.props.graphs}></Graph>
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