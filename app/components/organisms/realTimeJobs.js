import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tooltip from '../atoms/tooltip'

const RealTimeJobs = React.createClass({
	render() {
		return(
			<div className="horizontal rtj-container">
				<div className="row no-margin">
					<div className="col l6 m6 s12 rtj first">
						<div className="rtj-title">Jobs em execução</div>
						<div className="rtj-number">30</div>
					</div>
					<div className="col l6 m6 s12 rtj second">
						<div className="rtj-title">Próximos jobs</div>
						<ol className="rtj-list">
								<li className="first-job">Blow</li>
								<li className="first-job">Hand</li>
								<li>Steve</li>
								<li>Rib</li>
								<li>IDK</li>
						</ol>
					</div>
				</div>
			</div>
		)
	}
});

function mapStateToProps(state) {
	// return {
	// 	page: state.page
	// }
}

function mapDispatcherToProps(dispatch) {
	// return bindActionCreators({ menuClick: menuClick, loadMenu: loadMenu }, dispatch);
}

export default connect(null, null)(RealTimeJobs);
