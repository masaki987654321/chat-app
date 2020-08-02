import React, {Component} from 'react';

import Header from './Header';
import RoomList from './RoomList';
import RoomInput from './RoomInput';

import { Link } from 'react-router-dom';

type roomsProps = {
    roomActions: {
        change: (value: string) => string,
        create: (value: string) => any,
        index: () => any,
        show: (room_id: string) => any,
    },
    roomReducer: {
        room: any[],
        rooms: any,
        text: string,
        value: string,
    },
    
};

class Rooms extends Component<roomsProps> {
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