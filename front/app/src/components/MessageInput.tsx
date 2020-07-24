import React, {Component} from 'react';

import MessageButton from './MessageButton';
import TextField from '@material-ui/core/TextField';
import '../styles/TextInput.css';

// todo eventの型　any 使わない
type textInputProps = {
    messageReducer: any,
    messageActions: any,
    label: string,
    room_id: string,
}
class MessageInput extends Component<textInputProps> {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label={this.props.label}
                        className="text"
                        margin="normal"
                        value={this.props.messageReducer.value}
                        onChange={e => this.props.messageActions.change(e.target.value)}
                    />

                    <MessageButton
                        onClick={this.props.messageActions.create}
                        value={this.props.messageReducer.value}
                        room_id={this.props.room_id}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default MessageInput;