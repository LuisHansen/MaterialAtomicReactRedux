import React from 'react';
import { PropTypes } from 'react'
import Chart from 'chart.js'

const Graph = React.createClass({
	getInitialState() {
		return {};
	},
	componentDidUpdate() {
		this.state.graph.destroy();
		return this.componentDidMount();
	},
	componentDidMount: function() {
		var ctx = document.getElementById(this.props.id);
		this.state.graph = new Chart(ctx, this.props.config);
		console.log(this.state);
	},
	render : function() {
		return (
		<canvas id={this.props.id} width={this.props.width} height={this.props.height}></canvas>
		);
	}
});

Graph.propTypes = {
	config: PropTypes.object,
	id: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string
}

export default Graph;