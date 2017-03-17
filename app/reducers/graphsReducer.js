var initial = {
		mono: false,
	    type: 'bar',
	    responsive: true,
	    data: {
	        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	animation: false,
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	}

export default function (state=initial, action) {
	switch (action.type) {
		case 'CHART_TYPE':
			if (action.payload == 'bar')
				return Object.assign({},state,{
					type: 'line'
				});
			if (action.payload == 'line')
				return Object.assign({},state,{
					type: 'bar'
				});
			break;
		case 'CHART_COLORS':
			if (action.payload == "colors") {
				let datasets = Object.assign({},state.data.datasets[0],{
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ]
				});
				let data = Object.assign({},state.data);
				data.datasets[0] = datasets;
				let config = Object.assign({}, JSON.parse(localStorage.getItem("settings")), { mono: false });
				localStorage.setItem("settings", JSON.stringify(config));
				return Object.assign({},state, data, { mono: false });
			} else if (action.payload == "mono") {
				let datasets = Object.assign({},state.data.datasets[0],{
					backgroundColor: [
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)'
		            ],
		            borderColor: [
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)'
		            ]
				});
				let data = Object.assign({},state.data);
				data.datasets[0] = datasets;
				let config = Object.assign({}, JSON.parse(localStorage.getItem("settings")), { mono: true });
				localStorage.setItem("settings", JSON.stringify(config));
				return Object.assign({},state, data, { mono: true });
			}
			break;
		case 'APPLY_SETTINGS':
			let settings = action.payload;
			if (settings && settings.mono) {
				let datasets = Object.assign({},state.data.datasets[0],{
					backgroundColor: [
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)',
		                'rgba(255, 255, 255, 1)'
		            ],
		            borderColor: [
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)',
		                'rgba(0, 0, 0, 1)'
		            ]
				});
				let data = Object.assign({},state.data);
				data.datasets[0] = datasets;
				return Object.assign({},state, data, { mono: true });
			}
			break;
	}

	return state;
}