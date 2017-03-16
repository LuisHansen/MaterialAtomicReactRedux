import React from 'react';

const Card = React.createClass({
	render : function() {
		let classe = "card " + this.props.className;
		let title = [];
		let inner = [];
		let action = [];
		for (var i = 0; i < this.props.children.length; i++) {
			if ((typeof this.props.children[i]) == "object") {
				console.log()
				if (this.props.children[i].type == "title") {
					title.push(<span key={i} className="card-title">{this.props.children[i].props.children}</span>);
				} else if (this.props.children[i].props.id == "action") {
					action.push(<div key={i} className="card-action">{this.props.children[i].props.children}</div>);
				} else {
					inner.push(this.props.children[i]);
				}
			}
		}
		return (
		<div className={classe}>
			<div className="card-content">
				{title}
				{inner}
			</div>
				{action}
		</div>
		);
	}
});

export default Card;