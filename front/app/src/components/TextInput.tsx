import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
// import '../styles/TextInput.css';

// todo eventの型　any 使わない
type textInputProps = {
    value: string,
    onChange: (event: any) => void,
}
class TextInput extends Component<textInputProps> {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label="ルーム作成　ルーム名を入力"
                        className="text"
                        margin="normal"
                        value={this.props.value}
                        onChange={e => this.props.onChange(e.target.value)}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default TextInput;