import React from 'react';

const Table = React.createClass({
	componentDidMount() {
		let id = '#' + this.props.id;
		console.log(this);
		$(id).DataTable(this.props.config);
	},
	render : function() {
		return (
			<table id={this.props.id}>{this.props.children}</table>
		);
	}
});

export default Table;