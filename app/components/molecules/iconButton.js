import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'

const IconButton = React.createClass({
	render() {
		let classe = this.props.className;
		return (
		<Button className={classe}>
			<Icon className="left">{this.props.icon}</Icon>
			{this.props.children}
		</Button>
		);
	}
});

export default IconButton;
