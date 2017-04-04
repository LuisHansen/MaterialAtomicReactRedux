import React from 'react'
import { reduxForm } from 'redux-form'
import Datepicker from '../atoms/datepicker'
import Icon from '../atoms/icon'
import Tooltip from '../atoms/tooltip'
import IconTooltipped from '../molecules/iconTooltipped'

var Chart30DaysForm = React.createClass({
	render() {
		const { handleSubmit } = this.props;
	    return (
	    	<div>
		    	<form onSubmit={handleSubmit}>
		    		<div><Datepicker name="start">Starting date</Datepicker><Datepicker name="end">End date</Datepicker><button className="waves-effect waves-light btn-flat" type="submit">Submit</button></div>
				</form>
			</div>
	    );
	}
});

Chart30DaysForm = reduxForm({
 	form: 'summaryDatepicker'
})(Chart30DaysForm);

export default Chart30DaysForm;