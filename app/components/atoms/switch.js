import React from 'react'
import { Field } from 'redux-form'

var Switch = React.createClass({
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
				<div className="switch">
					<label>
						{this.props.children}
						<Field checked={this.state.checked}  onChange={this.handleCheckboxChange} id={this.props.name} name={this.props.name} component="input" type="checkbox" />
						<span className="lever"></span>
					</label>
				</div>				
			</div>
	    );
	}
});

export default Switch;