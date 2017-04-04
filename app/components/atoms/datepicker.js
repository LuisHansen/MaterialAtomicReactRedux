import React from 'react'
import { Field } from 'redux-form'

var Datepicker = React.createClass({
	componentDidMount() {
		$('.datepicker').pickadate({
			selectMonths: true,
			selectYears: 15
		});
	},
	render() {
		return (
			<div className="input-field">
				<Field name={this.props.name} className="datepicker" component="input" type="date" />
				<label htmlFor={this.props.name}>{this.props.children}</label>
			</div>
		);
	}	
});

export default Datepicker;