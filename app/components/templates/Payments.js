import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Graph from '../atoms/graph'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Payments = React.createClass({
	render : function() { return (
		<div>
			<Spinner className="center"></Spinner>
		</div>
		);
	}
});


function mapDispatcherToProps(dispatch) {
	
}

export default connect(null, null)(Payments);