import React from 'react';
import Icon from '../atoms/icon'
import Tooltip from '../atoms/tooltip'

const IconTooltipped = React.createClass({
	render() {
		let classe = this.props.className;
		return (
		<div className={classe}>
			<Tooltip data_tooltip={this.props.data_tooltip} data_position={this.props.data_position}><Icon>{this.props.children}</Icon></Tooltip>
		</div>
		);
	}
});

export default IconTooltipped;
