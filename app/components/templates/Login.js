import React from 'react'
import Button from '../atoms/button'
import Card from '../atoms/card'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import Tooltip from '../atoms/tooltip'
import LoginForm from '../organisms/loginForm'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Login = React.createClass({
	handleSubmit(values) {
		console.log(values);
	},
	render() {
		return (
			<LoginForm onSubmit={this.handleSubmit}></LoginForm>
		);
	}
});

function mapStateToProps(state) {
	// return {
	// 	graphs: state.graphs
	// }
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ changeChartType: changeChartType }, dispatch);
}

export default connect(null, null)(Login);
