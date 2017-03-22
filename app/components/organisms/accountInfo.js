import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tooltip from '../atoms/tooltip'

const AccountInfo = React.createClass({
	render() {
		return(
			<div>
				<p><b>Username:</b> {this.props.user.username}</p>
				<p><b>Email:</b> {this.props.user.email}</p>
				<p><b>Role:</b> {this.props.user.role}</p>
			</div>
		)
	}
});

function mapStateToProps(state) {
	// return {
	// 	page: state.page
	// }
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ menuClick: menuClick, loadMenu: loadMenu }, dispatch);
}

export default connect(null, null)(AccountInfo);
