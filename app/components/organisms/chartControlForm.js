import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Card from '../atoms/card'

var ChartControlForm = React.createClass({
	componentWillMount() {
		this.state = {};
		this.state.mono = this.props.mono;
	},
	componentDidMount() {
		$('select').material_select();
	},
	render: function () {
		const { handleSubmit } = this.props;
		let check = this.state.mono;
	    return (
	    	<div>
	    	<Card>
	    	<title>Graph options</title>
			<form onSubmit={handleSubmit}>
				<div className="input-field">
					<Field checked={check} onChange={() => this.state.mono = !this.state.mono} id="opcao" name="opcao" component="input" type="checkbox" />
    				<label htmlFor="opcao">Black & white</label>
				</div>
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