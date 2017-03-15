import React from 'react';

const MenuItem = React.createClass({
	render : function() {
		let classe = "waves-effect waves-light menuitem " + this.props.className;
		if (this.props.active)
			classe += " activeMenu";
		return (
		<a className={classe} onClick={this.props.click} >{this.props.children}</a>
		);
	}
});

export default MenuItem;