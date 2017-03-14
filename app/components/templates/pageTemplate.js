import React from 'react';
import Icon from '../atoms/icon'
import Menu from '../organisms/menu'
import { connect } from 'react-redux'


const Page = React.createClass({
	render : function() { 
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

export default connect(mapStateToProps)(Page);