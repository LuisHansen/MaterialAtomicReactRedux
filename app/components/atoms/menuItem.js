import React from 'react';

const MenuItem = React.createClass({
	click: function () {
		console.log("Clicou");
	},
	render : function() {
		let classe = "waves-effect waves-light menuitem " + this.props.className;
		return (
		<a className={classe} onClick={this.click} >{this.props.children}</a>
		);
	}
});

export default MenuItem;