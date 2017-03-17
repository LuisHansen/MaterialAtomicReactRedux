import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Card from '../atoms/card'
import Icon from '../atoms/icon'

var LoginForm = React.createClass({
	recover() {
		console.log("Recuperar senha");
	},
	render() {
		const { handleSubmit } = this.props;
	    return (
			<form onSubmit={handleSubmit}>
				<Card className="login-card">
					<title><Icon className="left">lock</Icon>Login</title>
					<br />
					<div className="input-field">
					  <Field id="user" name="user" component="input" type="text"/>
					  <label htmlFor="user">Username</label>
					</div>
					<div className="input-field">
					  <Field id="password" name="password" component="input" type="password"/>
					  <label htmlFor="password">Password</label>
					</div>
					<div className="center" id="action">
						<button className="waves-effect waves-light btn-flat" type="submit"><i className="material-icons right">send</i>Submit</button>
						<a className="waves-effect waves-light btn-flat" onClick={this.recover} type="recover"><i className="material-icons right">report_problem</i>Recover password</a>
					</div>
				</Card>
			</form>
	    );
	}
});

LoginForm = reduxForm({
 	form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm;