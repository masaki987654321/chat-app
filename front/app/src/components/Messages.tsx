import React, {Component} from 'react';

import Header from './Header';
import Message from './MessageList';
import MessageInput from './MessageInput';

import { Link } from 'react-router-dom';

// todo 型書く
type messagesProps = {
    actions: any,
    messageReducer: any,
    match: any,
    title: string,
    myIp: string,
};

class Messages extends Component<messagesProps> {

    componentDidMount() {
		console.log(this.props);
        this.props.actions.messages.show(this.props.match.params.room_id);
        this.props.actions.rooms.show(this.props.match.params.room_id);
    }
    
    render () {
        console.log(this.props);
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