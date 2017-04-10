import React from 'react';
import Icon from '../atoms/icon'
import { connect } from 'react-redux'
import { menuClick } from '../../actions/index'
import { bindActionCreators } from 'redux'

const BackDashboard = React.createClass({
	clickHandler() {
		this.props.menuClick({title: "Dashboard", template: "Dashboard", icon:"dashboard"});
	},
	render() {
		let classe = this.props.className;
		return (
			<div className="back" onClick={() => this.props.menuClick({title: "Dashboard", template: "Dashboard", icon:"dashboard"})}>
				<Icon className="left">arrow_back</Icon>
			</div>
		);
	}
});

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ menuClick: menuClick }, dispatch);
}

export default connect(null, mapDispatcherToProps)(BackDashboard);
