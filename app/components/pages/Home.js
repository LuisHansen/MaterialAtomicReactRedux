import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Menu from '../organisms/menu'
import Graph from '../atoms/graph'

const Home = React.createClass({
	configMock: {
	    type: 'bar',
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
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	},
	render : function() { return (
		<div>
			<Menu className=""><i className="titulo material-icons">nature_people</i></Menu>
				<div className="content">
				<h1>Hello World!</h1>
				<Button>Elemento "button"</Button>
				<Icon>add</Icon>
				<IconButton icon="add">Teste</IconButton>
				<Spinner></Spinner>
				<Graph id="grafico1" width="200" height="200" config={this.configMock}></Graph>
			</div>
		</div>
		);
	}
});

export default Home;