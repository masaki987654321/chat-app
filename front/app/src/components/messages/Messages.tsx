import React, {Component} from 'react';

import Header from '../Header';
import Message from './MessageList';
import MessageInput from './MessageInput';

import { Link } from 'react-router-dom';

import ActionCable from 'actioncable';

type messagesProps = {
    messageActions: {
        change: (value: string) => string,
        postMessage: (room_id: string, value: string) => any,
        getMessages: (room_id: string) => any,
        add: (data: any[]) => any[],
        getRoom: (room_id: string) => any,
    },
    messageReducer: {
        messages: any,
        text: string,
        value: string,
        roomName: string,
    },
    match: any,
    myIp: string,
};

let messageCable: any = null;

class Messages extends Component<messagesProps> {
    componentDidMount() {
        // meesage一覧を取得
        this.props.messageActions.getMessages(this.props.match.params.room_id);
        // roomの名前を取得
        this.props.messageActions.getRoom(this.props.match.params.room_id);

        const cable = ActionCable.createConsumer('http://localhost:3000/cable');
		const messageAdd: any = this.props.messageActions.add;
        messageCable = cable.subscriptions.create(
            {
                channel: 'MessageChannel',
                room_id: this.props.match.params.room_id
            }, 
            {
                connected() {
                    console.log('messasge channel connected');
                },
                disconnected() {
                    console.log('message channel disconnected');
                },
                received(data: any) {
                    messageAdd(data);
                },
            }
        )
    }

    componentWillUnmount() {
        messageCable.disconnected();
    }
    
    render () {
        return (
            <React.Fragment>

                <Link to='/home' style={{ textDecoration: 'none' }} >
                    <Header title={'『' + this.props.messageReducer.roomName + '』に入室しました'}/>
                </Link>
                
                {this.props.messageReducer.messages.map((msg: any) => {
                    return <Message msg={msg.text} ip={msg.ip} myIp={this.props.myIp}/>
                })}

                <MessageInput
                    messageActions={this.props.messageActions}
                    messageReducer={this.props.messageReducer}
                    room_id={this.props.match.params.room_id}
                />
            </React.Fragment>
        )
    }
}

export default Messages;