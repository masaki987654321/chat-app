import React, {Component} from 'react';

import Message from './MessageList';
import MessageInput from './MessageInput';
import RoomName from './RoomName';

// todo 型書く
type messagesProps = {
    actions: any,
    messages: any,
    messageReducer: any,
    match: any,
    title: string
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

                <RoomName title={this.props.title} />
                
                {this.props.messages.map((msg: any) => {
                    return <Message msg={msg.text} ip={msg.ip}/>
                })}

                <MessageInput
                    messageActions={this.props.actions.messages}
                    messageReducer={this.props.messageReducer}
                    label='メッセージの送信　メッセージを入力'
                    room_id={this.props.match.params.room_id}
                />
            </React.Fragment>
        )
    }
}

export default Messages;