import React from 'react';

const Card = React.createClass({
	render : function() {
		let classe = "card " + this.props.className;
		let inner = [];
		for (var i = 0; i < this.props.children.length; i++) {
			if ((typeof this.props.children[i]) == "object") {
				if (this.props.children[i].type == "title") {
					inner.push(<span key={i} className="card-title">{this.props.children[i].props.children}</span>);
				}
			}
		}
		return (
		<div className={classe}>
			<div className="card-content">
				{inner}
				{this.props.children}
			</div>
		</div>
		);
	}
});

export default Card;