import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tooltip from '../atoms/tooltip'

const AccountInfo = React.createClass({
	render() {
		if (this.props.menu.account == "show") {
			if (this.props.menu.style == 'small') {
				return(
					<div className="account-info small">
						<div className="user-circle"><img id="user-pic" src="/img/profile.jpg" alt="Profile picture" /></div>
					</div>
				);
			}
			return(
				<div className="account-info">
					<div className="user-circle"><img id="user-pic" src="/img/profile.jpg" alt="Profile picture" /></div>
					<div className="user-info">
						<p>{this.props.user.user.username}</p>
						<p>Role: {this.props.user.user.role}</p>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
});

function mapStateToProps(state) {
	return {
		menu: state.menu,
		user: state.user
	}
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ menuClick: menuClick, loadMenu: loadMenu }, dispatch);
}

export default connect(mapStateToProps, null)(AccountInfo);
