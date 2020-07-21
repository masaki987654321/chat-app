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
	Redirect
} from 'react-router-dom';


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
					<Switch>
						<Route path='/home'>
							{this.props.state.roomReducer.rooms.map((room: any) => {
								return <RoomList name={room.name} ip={room.ip}/>
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
						<Route path='/msg'>
							<Messages
								// todo idを変数に直す
								room_id='3'
								messages={this.props.state.roomReducer.messages}
								room_show={this.props.actions.rooms.show}
							/>

							<TextInput
								onChange={this.props.actions.rooms.change}
								value={this.props.state.roomReducer.value}
								label='メッセージの送信　メッセージを入力'
							/>

							<MessageButton 
								onClick={this.props.actions.messages.create}
								value={this.props.state.roomReducer.value}
								room_id='3'
							/>
						</Route>
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
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);