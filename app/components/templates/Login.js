import React from 'react'
import Button from '../atoms/button'
import Card from '../atoms/card'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Tooltip from '../atoms/tooltip'
import LoginForm from '../organisms/loginForm'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { loginAsync, tryFirstLoginAsync } from '../../actions/async'
import { bindActionCreators } from 'redux'


const Login = React.createClass({
	componentWillMount() {
		if (localStorage.getItem("token")) {
			this.props.tryFirstLoginAsync(localStorage.getItem("token"));
		}
	},
	handleSubmit(values) {
		this.props.loginAsync({ username: values.user, password: values.password });
	},
	render() {
		let loading = this.props.user.requesting ? <div><Spinner className="loading-login" /></div> : "";
		let classe = this.props.user.requesting ? "blurred" : "";
		return (
			<div>
			{loading}
			<div className={classe}>
			<LoginForm onSubmit={this.handleSubmit} user={this.props.user}></LoginForm>
			</div>
			</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ loginAsync: loginAsync, tryFirstLoginAsync: tryFirstLoginAsync }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Login);
