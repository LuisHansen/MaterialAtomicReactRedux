import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Card from '../../atoms/card'
import Checkbox from '../../atoms/checkbox'
import Icon from '../../atoms/icon'
import Tooltip from '../../atoms/tooltip'
import IconTooltipped from '../../molecules/iconTooltipped'

var MenuControlForm = React.createClass({
	render() {
		const { handleSubmit } = this.props;
	    return (
	    	<div>
	    	<form onSubmit={handleSubmit}>
		    	<Card>
			    	<title><Icon className="left">settings</Icon>Layout options<IconTooltipped className="right danger" data_position="top" data_tooltip="Clear settings">delete</IconTooltipped></title>
			    	<ul>
			    		<li>
							<Checkbox checked={this.props.compact} name="compact">Compact mode</Checkbox>
			    		</li>
			    	</ul>
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

MenuControlForm = reduxForm({
 	form: 'menuControl' // a unique name for this form
})(MenuControlForm);

export default MenuControlForm;