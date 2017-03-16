import React from 'react';

const Spinner = React.createClass({
	render() {
		return (
		  <div className="spin-container">
		  		<svg className="spinner" width="58px" height="58px" viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
		  			<circle className="circ" fill="#EDF1F2" cx="29" cy="29" r="29"></circle>
   					<circle className="path" fill="none" strokeWidth="3.5" strokeLinecap="round" cx="29" cy="29" r="14"></circle>
				</svg>
		  </div>
		);
	}
});

export default Spinner;
