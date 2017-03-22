import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
import AccountInfo from '../organisms/accountInfo'
import Navbar from '../molecules/navbar'
import Modal from '../molecules/modal'
import { applySettings, logout, fullscreen, init, loadMenu } from '../../actions/index'


const Page = React.createClass({
	componentWillMount() {
		this.props.loadMenu(this.props.user.role);
		// Check stored settings
		if (typeof(Storage) !== "undefined") {
			this.props.applySettings(JSON.parse(localStorage.getItem("settings")));
		}		
	},
	componentDidMount() {
	},
	logout() {
		$(".button-collapse").sideNav('hide');
		this.props.logout();
	},
	fullscreen() {
		this.props.fullscreen( this.props.appSettings.fullscreen ? "exit" : "enter" );
	},
	componentWillReceiveProps(nextProps) {
		if (nextProps.menu.pages && nextProps.menu.pages.length > 0) {
			this.props.init(nextProps.menu.pages[0])
		}
	},
	render() {
		return (
		<div>
			<Navbar title="Dashboard">
				<li className="fullscreen" href="javascript:void(0)" onClick={this.fullscreen}><i className="material-icons">{ this.props.appSettings.fullscreen ? "fullscreen_exit" : "fullscreen" }</i></li>
				<li href="#account_modal"><i className="material-icons">account_circle</i></li>
				<li href="javascript:void(0)" onClick={this.logout}><i className="material-icons right">exit_to_app</i>Logout</li>
			</Navbar>
			<Menu menu={this.props.menu}><Icon className="title">{this.props.page.icon}</Icon></Menu>
			<div className={this.props.menu.style == "big" ? "content" : "content-big" }>
				<h1>{this.props.page.title}</h1>
				{this.props.children}
			</div>
			<Modal id="account_modal">
				<h4>Account Info</h4>
				<AccountInfo user={this.props.user} />
			</Modal>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		page: state.page,
		menu: state.menu,
		appSettings: state.appSettings,
		user: state.user.user
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ applySettings: applySettings, logout: logout, fullscreen: fullscreen, loadMenu: loadMenu, init: init }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Page);
