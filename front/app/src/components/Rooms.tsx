import React, {Component} from 'react';

import Header from './Header';
import RoomList from './RoomList';
import RoomInput from './RoomInput';

import { Link } from 'react-router-dom';

// todo 型書く
type messagesProps = {
    roomActions: any,
    rooms: any,
    roomReducer: any,
};

class Rooms extends Component<messagesProps> { 
    render () {
        console.log(this.props);
        return (
            <React.Fragment>
                <Link to='/home' style={{ textDecoration: 'none' }} >
                    <Header title='ChatApp'/>
                </Link>

                {this.props.rooms.map((room: any) => {
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