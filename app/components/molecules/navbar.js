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
				itens.push(<li><a href={this.props.children[i].props.href}>{this.props.children[i].props.children}</a></li>);
			}
		});
		return (
			<nav>
				<div class="nav-wrapper">
				<a href="#" class="brand-logo">{this.props.children}</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					{itens}
				</ul>
				</div>
			</nav>
		);
	}
});

export default Navbar;