import React from 'react';

const Spinner = React.createClass({
	render : function() {
		let classe = "spinner " + this.props.className;
		return (
		<div className={classe}></div>
		);
	}
});

export default Spinner;