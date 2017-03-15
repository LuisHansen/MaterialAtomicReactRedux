import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import Tooltip from '../atoms/tooltip'
import IconButton from '../molecules/iconButton'
import TestForm from '../organisms/testForm'


const Nature = React.createClass({
	handleSubmit: function(values) {
		console.log("Enviado");
		console.log(values);
  	},
  	handleBlur: function(values) {
		console.log(values);
  	},
	render : function() { return (
		<div>
			<TestForm onSubmit={this.handleSubmit} onBlur={this.handleBlur} />
		</div>
		);
	}
});

export default connect(null, null)(Nature);