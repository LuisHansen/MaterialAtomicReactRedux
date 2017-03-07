import React from 'react';

const Button = React.createClass({
	click: function () {
		console.log("Clicou");
	},
	render : function() {
		let classe = "waves-effect waves-light btn " + this.props.className;
		return (
		<a className={classe} onClick={this.click} >{this.props.children}</a>
		);
	}
});

export default Button;