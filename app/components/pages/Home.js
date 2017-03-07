import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import IconButton from '../molecules/iconButton'
import Menu from '../organisms/menu'

const Home = React.createClass({
	render : function() { return (
		<div>
			<h1>Hello World!</h1>
			<Button>Elemento "button"</Button>
			<Icon>add</Icon>
			<IconButton icon="add">Teste</IconButton>
			<Menu className="red"></Menu>
		</div>
		);
	}
});

export default Home;