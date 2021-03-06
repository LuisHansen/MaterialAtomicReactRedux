import React from 'react';

const Icon = React.createClass({
	render() {
		let classes = this.props.className + " material-icons";
		return (
			<i className={classes}>{this.props.children}</i>
		);
	}
});

export default Icon;
