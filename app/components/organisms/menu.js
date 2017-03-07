import React from 'react';
import IconButton from '../molecules/iconButton'

const Menu = React.createClass({
	render : function() {
		let classe = this.props.className;
		return (
		<ul>
			<li>
				<IconButton className={classe} icon="add">Adicionar</IconButton>
			</li>
			<li>
				<IconButton className={classe} icon="account_balance">Universidade</IconButton>
			</li>
			<li>
				<IconButton className={classe} icon="credit_card">Billing</IconButton>
			</li>
		</ul>
		);
	}
});

export default Menu;