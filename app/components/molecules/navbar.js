import React from 'react';
import MenuItem from '../atoms/menuItem'
import Icon from '../atoms/icon'

class Navbar extends React.PureComponent {
	componentDidMount() {
		$(".button-collapse").sideNav();
	}
	render() {
		let classe = this.props.className;
		let itens = [];
		let itensLeft = [];
		let itensMobile = [];
		this.props.children
		.filter(child => typeof child === 'object')
		.map((child,i)=> {
			if ( child.type === 'li') {
				if (child.props.left) {
					itensLeft.push(<div className="account-toggle" key={i} onClick={this.props.children[i].props.onClick}>{this.props.children[i].props.children}</div>);
				} else {
					itens.push(<li key={i} onClick={this.props.children[i].props.onClick}><a href={this.props.children[i].props.href}>{this.props.children[i].props.children}</a></li>);	
				}
				if (child.props.className != "fullscreen" && !child.props.left) {
					itensMobile.push(<li key={i} onClick={this.props.children[i].props.onClick}><a href={this.props.children[i].props.href}>{this.props.children[i].props.children}</a></li>);
				}
			}
		});
		return (
			<nav>
				<div className="nav-wrapper hoverable">
				<a href="javascript:void(0)" className="brand-logo left"><img id="logo-dashboard" src="/img/logo.svg" alt="Dashboard Plus"/>{this.props.title}{itensLeft}</a>
				<a href="javascript:void(0)" data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
				<ul id="nav-mobile" className="right hide-on-small-only">
					{itens}
				</ul>
				<ul className="side-nav" id="mobile-menu">
					{itensMobile}
				</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;