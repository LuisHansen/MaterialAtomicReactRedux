import React from 'react'
import Page from '../templates/pageTemplate'
import Home from '../templates/Home'
import Payments from '../templates/Payments'
import { connect } from 'react-redux'

function PageSwitcher(props) {
	switch (props.page) {
		case "Home":
			return <Home />;
		break;
		case "Payments":
			return <Payments />;
		break;
	}
	
	return null;
}

const Index = React.createClass({
	render: function() {
		return(
			<Page>
				<PageSwitcher page={this.props.page.template} />
			</Page>
		)
	}
});

function mapStateToProps(state) {
	return {
		page: state.page
	}
}

export default connect(mapStateToProps)(Index);