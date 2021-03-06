"use strict";
import 'babel-polyfill';
import React from 'react';

const Card = React.createClass({
	componentDidMount() {
		$('.card').each( function(i) {
			//$(this).delay(20*i).transition({ y: '0.5rem', opacity: 1, duration: 200, easing: 'ease' });
			//$(this).delay(40*i).transition({ y: '0.5rem'});
			//$(this).delay(40*i).animate({ opacity: 1 }, { duration: 300, queue: false});
		});	
	},
	render() {

		let classe = "card " + this.props.className;
		let title = [], inner = [], action = [], tabs = [];

		if (this.props.children) {
			if (this.props.children.length > 0) {
				this.props.children
					.filter((child) => { return typeof child == 'object' })
					.map((child,i)=> {
						if (child.type == 'title') {
							title.push(<span key={i} className="card-title">{child.props.children}</span>);
						} else if (child.props.id == 'action') {
							action.push(<div key={i} className={child.props.className ? child.props.className + " card-action" : "card-action"}>{child.props.children}</div>);
						} else if (child.props.id == 'tabs') {
							tabs.push(child.props.children);
						} else {
							inner.push(child);
						}
				});
			} else {
				inner.push(this.props.children);
			}
		}

		return (
		  <div className={classe}>
			  <div className="card-content">
				  {title}
				  {inner}
			  </div>
			  	{tabs}
			  	{action}
		  </div>
		);
	}
});

export default Card;
