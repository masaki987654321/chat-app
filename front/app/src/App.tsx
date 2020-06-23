import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import RoomList from './components/RoomList';
import TextInput from './components/TextInput';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />

				// todo ルームの数だけループ
				<RoomList />

				<TextInput />

			</React.Fragment>
		);
	}
}

export default App;
