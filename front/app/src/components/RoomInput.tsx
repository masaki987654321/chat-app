import React, {Component} from 'react';

import RoomButton from './RoomButton';
import TextField from '@material-ui/core/TextField';
import '../styles/TextInput.css';

// todo eventの型　any 使わない
type textInputProps = {
    roomReducer: any,
    roomActions: any,
}
class RoomInput extends Component<textInputProps> {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label='トークルーム名を入力'
                        className="text"
                        margin="normal"
                        value={this.props.roomReducer.value}
                        onChange={e => this.props.roomActions.change(e.target.value)}
                    />

                    <RoomButton
                        onClick={this.props.roomActions.create}
                        value={this.props.roomReducer.value}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default RoomInput;