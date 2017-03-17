import React from 'react';
import MenuItem from '../atoms/menuItem'
import Icon from '../atoms/icon'

const Navbar = React.createClass({
	render() {
		let classe = this.props.className;
		let itens = [];
		this.props.children
		.filter(child => typeof child === 'object')
		.map((child,i)=> {
			if (child.type === 'li') {
				itens.push(<li key={i}><a href={this.props.children[i].props.href}>{this.props.children[i].props.children}</a></li>);
			}
		});
		return (
			<nav>
				<div className="nav-wrapper">
				<a href="#" className="brand-logo center">{this.props.title}</a>
				<ul id="nav-mobile" className="right hide-on-small-only">
					{itens}
				</ul>
				</div>
			</nav>
		);
	}
});

export default Navbar;