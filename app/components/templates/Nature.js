import React from 'react';
import { connect } from 'react-redux'
import TestForm from '../organisms/testForm'


const Nature = React.createClass({
	handleSubmit(values) {
		console.log("Enviado");
		console.log(values);
  },
  handleBlur(values) {
		console.log(values);
  },
	render() { return (
		<div>
			<TestForm onSubmit={this.handleSubmit} onBlur={this.handleBlur} />
		</div>
		);
	}
});

export default connect(null, null)(Nature);
