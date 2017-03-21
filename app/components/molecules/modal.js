import React from 'react';

const Modal = React.createClass({
	componentDidMount() {
		$('.modal').modal();
	},
	render() {
		let id = this.props.id;
		return (
			<div id={id} className="modal">
				<div className="modal-content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

export default Modal;