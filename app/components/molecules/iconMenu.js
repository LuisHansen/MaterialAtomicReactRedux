import React from 'react';
import MenuItem from '../atoms/menuItem'
import Icon from '../atoms/icon'

const IconMenu = React.createClass({
	render : function() {
		let classe = this.props.className;
		return (
		<MenuItem className={classe} click={this.props.click} active={this.props.active}>
			<Icon className="left">{this.props.icon}</Icon>
			{this.props.children}
		</MenuItem>
		);
	}
});

export default IconMenu;