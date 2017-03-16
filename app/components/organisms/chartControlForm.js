import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Card from '../atoms/card'
import Checkbox from '../atoms/checkbox'

var ChartControlForm = React.createClass({
	componentDidMount() {
		$('select').material_select();
	},
	render: function () {
		const { handleSubmit } = this.props;
	    return (
	    	<div>
	    	<Card>
	    	<title>Graph options</title>
			<form onSubmit={handleSubmit}>
				<Checkbox checked={this.props.mono} name="bnw">Black & white</Checkbox>
				<br />
				<button className="btn waves-effect waves-light" type="submit"><i className="material-icons right">send</i>Submit</button>
			</form>
			</Card>
			</div>
	    );
	}
});

ChartControlForm = reduxForm({
 	form: 'chartControl' // a unique name for this form
})(ChartControlForm);

export default ChartControlForm;