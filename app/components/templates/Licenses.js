import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../atoms/button'
import Graph from '../atoms/graph'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import Card from '../atoms/card'
import IconButton from '../molecules/iconButton'
import ChartControlForm from '../organisms/chartControlForm'
import MenuControlForm from '../organisms/menuControlForm'
import { getLicensesAsync } from '../../actions/async'


const Licenses = React.createClass({
	componentWillMount() {
		this.props.getLicensesAsync(localStorage.getItem("token"));
	},
	render() {
		let licenses = [];
		if (this.props.licenses.loaded) {
			this.props.licenses.licenses.map((license, i) => {
				licenses.push(
					<li key={license._id} >
						<Card>
							<p><b>Created at</b>: {new Date(license.createdAt).toLocaleDateString("pt-BR")}</p>
							<p><b>Expiration:</b> {new Date(license.expiration.substr(0,4)+"/"+license.expiration.substr(4,2)+"/"+license.expiration.substr(6,2)).toLocaleDateString("pt-BR")}</p>
							<p><b>Modules:</b> {license.modules.map((module, i) => { return<span key={i}>{module}{i<(license.modules.length-1)&& ", "}</span>})}</p>
						</Card>
					</li>
				);
			});
		}
		return (
		<div>
			<div className="row">
				<div className="col s12">
					<Card>
						<title>License management</title>
						<ul>{licenses}</ul>
					</Card>
				</div>
			</div>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		licenses: state.licenses
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ getLicensesAsync: getLicensesAsync }, dispatch);
}


export default connect(mapStateToProps, mapDispatcherToProps)(Licenses);
