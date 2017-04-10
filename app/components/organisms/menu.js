import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import IconMenu from '../molecules/iconMenu'
import AccountInfo from '../molecules/accountInfo'
import { menuClick, loadMenu } from '../../actions/index'

const Menu = React.createClass({
	populateMenu: function (object) {
		let menu = [];
		let inner = null;
		let index = 0;
		object.props.menu.pages.forEach(function(page) {
			let active = (page.title === object.props.page.title);
			if (object.props.menu.style == "big") {
				inner = <IconMenu active={active} click={() => {object.props.menuClick(page)}} className={object.props.className} icon={page.icon}>{page.title}</IconMenu>
			} else if (object.props.menu.style == "small") {
				inner = <Tooltip data_tooltip={page.title} data_position="right"><IconMenu active={active} click={() => object.props.menuClick(page)} className={object.props.className} icon={page.icon}></IconMenu></Tooltip>
			}
			menu.push(
				<li key={index++}>
					{inner}
				</li>
			);
		});
		return menu;
	},
	componentDidUpdate() {
		$('.loading').fadeOut();
	},
	render() {
		// Big sidenav
		if (this.props.menu.pages.length == 0) {
			return (
				<div className={this.props.menu.style == "big" ? "menu" : "menu-small"}>
					<div className="loading">
						<br />
						<br />
						<center><Spinner className={(this.props.menu.style == "small") ? "spinner-small" : ""} small={this.props.menu.style == "small"}/></center>
					</div>
				</div>
			)
		}
		return (
		<div className={this.props.menu.style == "big" ? "menu" : "menu-small"}>
			{ this.props.menu.style == "big" && 
				<div className="loading">
					<br />
					<br />
					<center><Spinner /></center>
				</div>
			}
			<ul>
				<AccountInfo />
				{ this.props.menu.style == "big" &&
					<li className="menutitle">
						<h3>{this.props.children}</h3>
					</li>
				}
				{this.populateMenu(this)}
			</ul>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		page: state.page,
		user: state.user.user
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ menuClick: menuClick, loadMenu: loadMenu }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Menu);
