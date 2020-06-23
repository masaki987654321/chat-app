import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import RoomList from './components/RoomList';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				// todo ルームの数だけループ
				<RoomList />
			</React.Fragment>
		);
	}
}

export default App;
