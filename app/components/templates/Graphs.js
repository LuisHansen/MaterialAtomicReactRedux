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
		if (values.bnw != undefined)
			this.props.changeChartColors(values.bnw ? "mono" : "colors");
		return false;
  	},
	render : function() { return (
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