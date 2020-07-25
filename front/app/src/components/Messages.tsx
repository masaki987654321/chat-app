import React, {Component} from 'react';

import Header from './Header';
import Message from './MessageList';
import MessageInput from './MessageInput';

import { Link } from 'react-router-dom';

type messagesProps = {
    actions: {
        ipAdress: {
            getAdress: () => string,
        },
        messages: {
            change: (value: string) => string,
            create: (room_id: string, value: string) => any,
            show: (room_id: string) => any,
        },
        rooms: {
            change: (value: string) => string,
            create: (value: string) => any,
            index: () => any,
            show: (room_id: string) => any,
        }
    },
    messageReducer: {
        messages: any,
        text: string,
        value: string,
    },
    match: any,
    title: string,
    myIp: string,
};

class Messages extends Component<messagesProps> {

    componentDidMount() {
        this.props.actions.messages.show(this.props.match.params.room_id);
        this.props.actions.rooms.show(this.props.match.params.room_id);
    }
    
    render () {
        return (
            <React.Fragment>

                <Link to='/home' style={{ textDecoration: 'none' }} >
                    <Header title={'トークルーム『' + this.props.title + '』に入りました'}/>
                </Link>
                
                {this.props.messageReducer.messages.map((msg: any) => {
                    return <Message msg={msg.text} ip={msg.ip} myIp={this.props.myIp}/>
                })}

                <MessageInput
                    messageActions={this.props.actions.messages}
                    messageReducer={this.props.messageReducer}
                    room_id={this.props.match.params.room_id}
                />
            </React.Fragment>
        )
    }
}

export default Messages;