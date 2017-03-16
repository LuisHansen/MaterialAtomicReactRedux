"use strict";
import 'babel-polyfill';
import React from 'react';

const Card = React.createClass({
	render() {

		let classe = "card " + this.props.className;
		let title = [], inner = [], action = [];

    this.props.children
      .filter(child => typeof child === 'object')
      .map((child,i)=> {
			if (child.type === 'title') {
				title.push(<span key={i} className="card-title">{child.props.children}</span>);
			} else if (child.props.id === 'action') {
				action.push(<div key={i} className="card-action">{child.props.children}</div>);
			} else {
				inner.push(child);
			}
      });
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
