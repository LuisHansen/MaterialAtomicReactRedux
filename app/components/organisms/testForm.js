import React from 'react'
import { Field, reduxForm } from 'redux-form'

var TestForm = React.createClass({
	render: function () {
		const { handleSubmit } = this.props;
	    return (
			<form onSubmit={handleSubmit}>
				<div className="input-field">
				  <Field id="firstName" name="firstName" component="input" type="text"/>
				  <label htmlFor="firstName">First Name</label>
				</div>
				<div className="input-field">
				  <Field id="lastName" name="lastName" component="input" type="text"/>
				  <label htmlFor="lastName">Last Name</label>
				</div>
				<div className="input-field">
				  <Field id="email" name="email" component="input" type="email"/>
				  <label htmlFor="email">Email</label>
				</div>
				<button className="btn waves-effect waves-light" type="submit"><i className="material-icons right">send</i>Submit</button>
			</form>
	    );
	}
});

TestForm = reduxForm({
 	form: 'test' // a unique name for this form
})(TestForm);

export default TestForm;