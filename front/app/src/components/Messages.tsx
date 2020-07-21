import React, {Component} from 'react';

import Message from './Message';
// todo 型書く
type messagesProps = any;

class Messages extends Component<messagesProps> {
    render () {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.props.messages.map((msg: any) => {
                    return <Message msg={msg.text} ip={msg.ip}/>
                })}
            </React.Fragment>
        )
    }
}

export default Messages;