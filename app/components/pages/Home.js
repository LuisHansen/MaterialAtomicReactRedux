import React from 'react';
import Button from '../atoms/button'
import Icon from '../atoms/icon'
import Spinner from '../atoms/spinner'
import IconButton from '../molecules/iconButton'
import Menu from '../organisms/menu'
import Graph from '../atoms/graph'
import { connect } from 'react-redux'
import { changeChartType } from '../../actions/index'
import { bindActionCreators } from 'redux'


const Home = React.createClass({
	render : function() { return (
		<div>
			<Menu><i className="titulo material-icons">nature_people</i></Menu>
			<div className="content">
			<h1>Hello World!</h1>
			<Button click={() => this.props.changeChartType(this.props.graphs.type)}>Clique</Button>
			<Icon>add</Icon>
			<IconButton icon="add">Botão com ícone</IconButton>
			<Spinner></Spinner>
			<Graph id="grafico1" width="200" height="200" config={this.props.graphs}></Graph>
			</div>
		</div>
		);
	}
});

function mapStateToProps(state) {
	return {
		graphs: state.graphs
	}
}

function mapDispatcherToProps(dispatch) {
	return bindActionCreators({ changeChartType: changeChartType }, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Home);