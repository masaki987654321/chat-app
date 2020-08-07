import React, {Component} from 'react';

import MessageButton from './MessageButton';
import TextField from '@material-ui/core/TextField';
import '../../styles/TextInput.css';

type textInputProps = {
    messageReducer: {
        messages: any,
        text: string,
        value: string,
        roomName: string,
    },
    messageActions: {
        change: (value: string) => string,
        postMessage: (room_id: string, value: string) => any,
        getMessages: (room_id: string) => any,
        add: (data: any[]) => any[],
        getRoom: (room_id: string) => any,
    },
    room_id: string,
}
class MessageInput extends Component<textInputProps> {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label='メッセージを入力'
                        className="text"
                        margin="normal"
                        value={this.props.messageReducer.value}
                        onChange={e => this.props.messageActions.change(e.target.value)}
                    />

                    <MessageButton
                        onClick={this.props.messageActions.postMessage}
                        value={this.props.messageReducer.value}
                        room_id={this.props.room_id}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default MessageInput;