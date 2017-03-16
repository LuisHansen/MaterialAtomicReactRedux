import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Card from '../atoms/card'
import Checkbox from '../atoms/checkbox'
import Icon from '../atoms/icon'
import Tooltip from '../atoms/tooltip'
import IconTooltipped from '../molecules/iconTooltipped'

var ChartControlForm = React.createClass({
	componentDidMount() {
		$('select').material_select();
	},
	render() {
		const { handleSubmit } = this.props;
	    return (
	    	<div>
	    	<form onSubmit={handleSubmit}>
		    	<Card>
			    	<title><Icon className="left">settings</Icon>Graph options<IconTooltipped className="right danger" data_position="top" data_tooltip="Clear settings">delete</IconTooltipped></title>
					<Checkbox checked={this.props.mono} name="bnw">Black & white</Checkbox>
					<br />
					<div id="action">
						<button className="waves-effect waves-light btn-flat" type="submit"><i className="material-icons right">send</i>Submit</button>
					</div>
				</Card>
			</form>
			</div>
	    );
	}
});

ChartControlForm = reduxForm({
 	form: 'chartControl' // a unique name for this form
})(ChartControlForm);

export default ChartControlForm;
