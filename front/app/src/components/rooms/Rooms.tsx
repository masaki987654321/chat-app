import React, {Component} from 'react';

import Header from '../Header';
import RoomList from './RoomList';
import RoomInput from './RoomInput';

import { Link } from 'react-router-dom';

import ActionCable from 'actioncable';

type roomsProps = {
    roomActions: {
        change: (value: string) => string,
        postRoom: (value: string) => any,
        getRooms: () => any,
        add: (newRoom: any[]) => any[],
    },
    roomReducer: {
        room: any[],
        rooms: any,
        text: string,
        value: string,
    },
    
};

let roomCable: any = null;
class Rooms extends Component<roomsProps> {

    componentDidMount() {
        // this.props.roomActions.index();
        this.props.roomActions.getRooms();

		const cable = ActionCable.createConsumer('http://localhost:3000/cable');
		const roomsAdd: any = this.props.roomActions.add;
        roomCable = cable.subscriptions.create({channel: 'RoomChannel'}, {
            connected() {
                console.log('roon channel connected');
            },
            disconnected() {
                console.log('room chanel disconnected');
            },
            received(data: any) {
				roomsAdd(data);
            },
        })
	}

    componentWillUnmount() {
        roomCable.disconnected();
    }
    render () {
        return (
            <React.Fragment>
                <Link to='/home' style={{ textDecoration: 'none' }} >
                    <Header title='ChatApp'/>
                </Link>

                {this.props.roomReducer.rooms.map((room: any) => {
                    return <Link to={'/room/' + room.id} style={{ textDecoration: 'none' }}><RoomList name={room.name} ip={room.ip}/></Link>
                })}

                <RoomInput
                    roomActions={this.props.roomActions}
                    roomReducer={this.props.roomReducer}
                />
            </React.Fragment>
        )
    }
}

export default Rooms;