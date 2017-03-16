import React from 'react';

const Tooltip = React.createClass({
	componentDidMount() {
		$('.tooltipped').tooltip({delay: 50});
	},
	render() {
		let classes = this.props.className + " tooltipped";
		return (
			<span className={classes} data-position={this.props.data_position} data-delay="50" data-tooltip={this.props.data_tooltip}>{this.props.children}</span>
		);
	}
});

export default Tooltip;
