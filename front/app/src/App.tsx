import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import RoomList from './components/RoomList';
import TextInput from './components/TextInput';
import SendButton from './components/SendButton';
import Messages from './components/Messages';
import MessageButton from './components/MessageButton';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './redux/actions/index';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
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
					<Link to='/home'>
						<Header title='ChatApp'/>
					</Link>
					
					<Switch>
						<Route path='/home'>

							{this.props.state.roomReducer.rooms.map((room: any) => {
								return <Link to={'/room/' + room.id}><RoomList name={room.name} ip={room.ip}/></Link>
							})}

							<TextInput
								onChange={this.props.actions.rooms.change}
								value={this.props.state.roomReducer.value}
								label='ルームの作成　ルーム名を入力'
							/>

							<SendButton
								onClick={this.props.actions.rooms.create}
								value={this.props.state.roomReducer.value}
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