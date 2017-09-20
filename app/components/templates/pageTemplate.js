import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
import Navbar from '../molecules/navbar'
import Modal from '../molecules/modal'
import { applySettings, logout, fullscreen, init, loadMenu, showAccount } from '../../actions/index'


const Page = React.createClass({
	componentWillMount() {
		this.props.loadMenu("ADMIN"); // Mudar API para retornar o user junto com o login
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
	accountInfo() {
		this.props.showAccount();
	},
	componentWillReceiveProps(nextProps) {
		// if (nextProps.menu.pages && nextProps.menu.pages.length > 0) {
		// 	this.props.init(nextProps.menu.pages[0])
		// }
	},
	render() {
		return (
		<div>
			<Navbar title="CoDE">
				<li className="fullscreen" href="javascript:void(0)" onClick={this.fullscreen}><i className="material-icons">{ this.props.appSettings.fullscreen ? "fullscreen_exit" : "fullscreen" }</i></li>
				<li left onClick={this.accountInfo}><i className="material-icons">account_circle</i></li>
				<li href="javascript:void(0)" onClick={this.logout}><i className="material-icons right">exit_to_app</i>Logout</li>
			</Navbar>
			<Menu menu={this.props.menu}><Icon className="title">{this.props.page.icon}</Icon></Menu>
			{ this.props.page.title && (<div className={this.props.menu.style == "big" ? "content" : "content-big" }>
				{ this.props.menu.style != "big" && ( <div className="page-title"><a href="javascript:void(0)" className="breadcrumb">{this.props.page.title}</a>{this.props.page.subPage && <a href="javascript:void(0)" className="breadcrumb">{this.props.page.subPage}</a>}<div className="right">Último crawl: x/x xx:xx</div></div> ) }
				{this.props.children}
			</div>) }
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
	return bindActionCreators({ applySettings: applySettings, logout: logout, fullscreen: fullscreen, loadMenu: loadMenu, init: init, showAccount: showAccount }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Page);
