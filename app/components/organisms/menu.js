import React from 'react';
import IconMenu from '../molecules/iconMenu'
import Spinner from '../atoms/spinner'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { menuClick, loadMenu } from '../../actions/index'

const Menu = React.createClass({
	populateMenu: function (object) {
		let menu = [];
		let index = 0;
		object.props.menu.pages.forEach(function(page) {
			let active = null;
			(page.title == object.props.page.title) ? active = true : active = false;
			menu.push(
				<li key={index++}>
					<IconMenu active={active} click={() => object.props.menuClick(page)} className={object.props.className} icon={page.icon}>{page.title}</IconMenu>
				</li>
			);
		});
		return menu;
	},
	render : function() {
		if (this.props.menu.pages.length == 0) {
			setTimeout(() => {
				this.props.loadMenu();
			}, 3000);
			return (
				<div className="menu">
					<center><Spinner /></center>
				</div>
			)
		}
		return (
		<div className="menu">
			<ul>
				<li className="titulomenu">
					<h3>{this.props.children}</h3>
				</li>
				{this.populateMenu(this)}
			</ul>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		page: state.page
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ menuClick: menuClick, loadMenu: loadMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Menu);