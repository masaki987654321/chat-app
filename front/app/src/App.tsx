import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import RoomList from './components/RoomList';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions/index';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

// todo propsの肩をかく
type props = any;

class App extends Component<props> {

	componentDidMount() {
		console.log(this.props.actions.rooms.index);
		this.props.actions.rooms.index();
	}
	
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<Header />

				<Router>
					<switch>
						<Route path='/home'>
							{this.props.state.roomReducer.rooms.map((room: any) => {
								return <RoomList name={room.name} ip={room.ip}/>
							})}

							<TextInput
								onChange={this.props.actions.rooms.change}
								value={this.props.state.roomReducer.value}
							/>

							<SendButton 
								onClick={this.props.actions.rooms.create}
								value={this.props.state.roomReducer.value}
							/>
						</Route>
					</switch>
				</Router>



			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({ state });

const mapDispatchToProps = (dispatch: any) => ({
	actions: {
		rooms: bindActionCreators(actions.rooms, dispatch),
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);