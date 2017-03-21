import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
import Navbar from '../molecules/navbar'
import Modal from '../molecules/modal'
import { applySettings, logout } from '../../actions/index'


const Page = React.createClass({
	componentWillMount() {
		// Check store settings
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
	render() {
		return (
		<div>
			<Navbar title="Dashboard">
				<li href="#account_modal"><i className="material-icons">account_circle</i></li>
				<li href="javascript:void(0)" onClick={this.logout}><i className="material-icons right">exit_to_app</i>Logout</li>
			</Navbar>
			<Menu menu={this.props.menu}><Icon className="title">{this.props.page.icon}</Icon></Menu>
			<div className={this.props.menu.style == "big" ? "content" : "content-big" }>
				<h1>{this.props.page.title}</h1>
				{this.props.children}
			</div>
			<Modal id="account_modal">
				<h4>Account info</h4>
				<p>Em 22 de julho de 1951, o Palmeiras realizou um dos maiores feitos de sua gloriosa trajetória. Foi neste dia, diante da forte e estrelada Juventus de Turim, que o Verdão conquistou o Torneio Internacional de Clubes Campeões, consolidado no futebol como o primeiro campeonato mundial interclubes da história. O grito de campeão veio com uma vitória e um empate diante da Vecchia Signora nas finais, disputadas no Maracanã lotado de brasileiros preenchidos de esperança e alegria no primeiro grande triunfo do Brasil no “período pós-Maracanazo”.</p>
			</Modal>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		page: state.page,
		menu: state.menu
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ applySettings: applySettings, logout: logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Page);
