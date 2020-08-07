import React, { Component } from 'react';
import './styles/App.css';

import Rooms from './components/rooms/Rooms';
import Messages from './components/messages/Messages';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions/index';
import { default as roomActions } from './redux/actions/rooms';
import { default as messageActions } from './redux/actions/messages';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

type props = any;

let roomCable: any = null;

class App extends Component<props> {

	componentDidMount() {
		this.props.actions.ipAdress.getAdress();
	}
	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route path='/home'>
							<Rooms
								roomActions={this.props.actions.rooms}
								roomReducer={this.props.roomReducer}
							/>
						</Route>
						<Route path='/room/:room_id' render={({match}) => (
							<Messages
								messageActions={this.props.actions.messages}
								messageReducer={this.props.messageReducer}
								match={match}
								myIp={this.props.ipReducer.myIp}
							/>
						)}/>
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => ({ ...state });

const mapDispatchToProps = (dispatch: any) => ({
	actions: {
		rooms: bindActionCreators(roomActions, dispatch),
		messages: bindActionCreators(messageActions, dispatch),
		ipAdress: bindActionCreators(actions.ipAdress, dispatch),
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);