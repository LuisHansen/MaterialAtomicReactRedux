import React from 'react';
import { PropTypes } from 'react'

const Button = React.createClass({
	render : function() {
		let classe = "waves-effect waves-light btn " + this.props.className;
		return (
		<a className={classe} onClick={this.props.click}>{this.props.children}</a>
		);
	}
});

Button.propTypes = {
	click: PropTypes.func
}

export default Button;