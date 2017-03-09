import React from 'react';
import IconMenu from '../molecules/iconMenu'

const Menu = React.createClass({
	render : function() {
		let classe = this.props.className;
		return (
		<div className="menu">
			<ul>
				<li className="titulomenu">
					<h3>{this.props.children}</h3>
				</li>
				<li>
					<IconMenu className={classe} icon="add">Adicionar</IconMenu>
				</li>
				<li>
					<IconMenu className={classe} icon="account_balance">Universidade</IconMenu>
				</li>
				<li>
					<IconMenu className={classe} icon="credit_card">Billing</IconMenu>
				</li>
			</ul>
		</div>
		);
	}
});

export default Menu;