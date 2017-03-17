import React from 'react'
import { connect } from 'react-redux'
import Graphs from '../templates/Graphs'
import Home from '../templates/Home'
import Login from '../templates/Login'
import Nature from '../templates/Nature'
import Page from '../templates/pageTemplate'
import Payments from '../templates/Payments'

function PageSwitcher(props) {
	switch (props.page) {
		case "Home":
			return <Home />;
		break;
		case "Payments":
			return <Payments />;
		break;
		case "Nature":
			return <Nature />;
		break;
		case "Graphs":
			return <Graphs />;
		break;
	}

	return null;
}

const Index = React.createClass({
	render() {
		if (this.props.user.login) {
			return(
				<Page>
					<PageSwitcher page={this.props.page.template} />
				</Page>
			)
		} else {
			return(
				<Login />
			)
		}
	}
});

function mapStateToProps(state) {
	return {
		page: state.page,
		user: state.user
	}
}

export default connect(mapStateToProps)(Index);