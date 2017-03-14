import React from 'react';

const Table = React.createClass({
	componentDidMount() {
		let id = '#' + this.props.id;
		$(id).DataTable(this.props.config);
	},
	componentDidUpdate() {
		let id = '#' + this.props.id;
		$(id).DataTable().destroy();
		$(id).DataTable(this.props.config);
	},
	render : function() {
		return (
			<table id={this.props.id}>{this.props.children}</table>
		);
	}
});

export default Table;