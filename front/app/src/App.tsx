import React, { Component } from 'react';
import './styles/App.css';

import Rooms from './components/Rooms';
import Messages from './components/Messages';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions/index';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

// todo propsの肩をかく
type props = any;

class App extends Component<props> {

	componentDidMount() {
		console.log(this.props.actions.rooms.index);
		this.props.actions.rooms.index();
		this.props.actions.ipAdress.getAdress();
	}

	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route path='/home'>
							<Rooms
								rooms={this.props.state.roomReducer.rooms}
								roomActions={this.props.actions.rooms}
								roomReducer={this.props.state.roomReducer}
							/>
						</Route>
						<Route path='/room/:room_id' render={({match}) => (
							<Messages
								messages={this.props.state.messageReducer.messages}
								actions={this.props.actions}
								state={this.props.state}
								match={match}
								title={this.props.state.roomReducer.room.name}
							/>
						)}/>
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({ state });

const mapDispatchToProps = (dispatch: any) => ({
	actions: {
		rooms: bindActionCreators(actions.rooms, dispatch),
		messages: bindActionCreators(actions.messages, dispatch),
		ipAdress: bindActionCreators(actions.ipAdress, dispatch),
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);