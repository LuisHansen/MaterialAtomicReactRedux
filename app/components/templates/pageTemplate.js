import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
import Navbar from '../molecules/navbar'
import { applySettings } from '../../actions/index'


const Page = React.createClass({
	componentWillMount() {
		// Check store settings
		if (typeof(Storage) !== "undefined") {
			this.props.applySettings(JSON.parse(localStorage.getItem("settings")));
		}
	},
	render() {
		return (
		<div>
			<Navbar title="Dashboard">
				<li href="#">Test</li>
				<li href="#">Test2</li>
			</Navbar>
			<Menu menu={this.props.menu}><Icon className="title">{this.props.page.icon}</Icon></Menu>
			<div className={this.props.menu.style == "big" ? "content" : "content-big" }>
				<h1>{this.props.page.title}</h1>
				{this.props.children}
			</div>
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
	return bindActionCreators({ applySettings: applySettings }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Page);
