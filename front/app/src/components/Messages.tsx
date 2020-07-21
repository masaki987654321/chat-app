import React, {Component} from 'react';

import Message from './Message';
import TextInput from './TextInput';
import MessageButton from './MessageButton';
// todo 型書く
type messagesProps = {
    actions: any,
    messages: any,
    state: any,
    match: any,
};

class Messages extends Component<messagesProps> {

    componentDidMount() {
		console.log(this.props);
		this.props.actions.rooms.show(this.props.match.params.room_id);
    }
    
    render () {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.props.messages.map((msg: any) => {
                    return <Message msg={msg.text} ip={msg.ip}/>
                })}

                <TextInput
                    onChange={this.props.actions.rooms.change}
                    value={this.props.state.roomReducer.value}
                    label='メッセージの送信　メッセージを入力'
                />

                <MessageButton
                    onClick={this.props.actions.messages.create}
                    value={this.props.state.roomReducer.value}
                    room_id={this.props.match.params.room_id}
                />
            </React.Fragment>
        )
    }
}

export default Messages;