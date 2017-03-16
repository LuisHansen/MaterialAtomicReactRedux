import React from 'react'
import { Field } from 'redux-form'

var Checkbox = React.createClass({
	getInitialState() {
	    return {checked: this.props.checked};
	},
	componentDidMount() {
		$('select').material_select();
	},
  handleCheckboxChange(event) {
	  this.setState({checked: event.target.checked});
  },
	render() {
	    return (
			<div className="input-field">
				<Field checked={this.state.checked}  onChange={this.handleCheckboxChange} id={this.props.name} name={this.props.name} component="input" type="checkbox" />
				<label htmlFor={this.props.name}>{this.props.children}</label>
			</div>
	    );
	}
});

export default Checkbox;
