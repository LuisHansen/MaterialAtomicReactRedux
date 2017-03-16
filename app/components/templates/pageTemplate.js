import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
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
			<Menu menu={this.props.menu}><Icon className="title">{this.props.page.icon}</Icon></Menu>
			<div className="content">
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
