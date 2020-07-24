import React, {Component} from 'react';

import Header from './Header';
import RoomList from './RoomList';
import TextInput from './TextInput';
import SendButton from './SendButton';

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

                <TextInput
                    onChange={this.props.roomActions.change}
                    value={this.props.roomReducer.value}
                    label='ルームの作成　ルーム名を入力'
                />

                <SendButton
                    onClick={this.props.roomActions.create}
                    value={this.props.roomReducer.value}
                />
            </React.Fragment>
        )
    }
}

export default Rooms;