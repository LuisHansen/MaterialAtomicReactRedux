import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Icon from '../atoms/icon'
import Tooltip from '../atoms/tooltip'
import IconTooltipped from '../molecules/iconTooltipped'

var Chart30DaysForm = React.createClass({
	render() {
		const { handleSubmit } = this.props;
	    return (
	    	<div className="formInline">
		    	<form onSubmit={handleSubmit}>
					<div className="input-field start-date">
						<Field id="start" name="start" component="input" type="date"/>
						<label htmlFor="start" className="active">Start date</label>
					</div>
					<div className="input-field end-date">
						<Field id="end" name="end" component="input" type="date"/>
						<label htmlFor="end" className="active">End date</label>
					</div>
					<button className="waves-effect waves-light btn-flat" type="submit"><i className="material-icons right">send</i>Submit</button>
				</form>
			</div>
	    );
	}
});

Chart30DaysForm = reduxForm({
 	form: 'summaryDatepicker'
})(Chart30DaysForm);

export default Chart30DaysForm;