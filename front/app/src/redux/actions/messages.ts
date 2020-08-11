import axios from 'axios';

// 型の付けかた調べる
type messages = any;
type message = any;
type room = any;
type action = {
    type: string,
    payload: any,
};

const getMessages = (room_id: string): any => {
    return (dispatch: any) => {
        axios.get('http://localhost:3000/api/v1/messages/' + room_id)
            .then(res => {
                dispatch(indexMessages(res.data))}
            ).catch(err => {
                console.log(err);
                dispatch(indexMessages([]))
            })
    }
}

const indexMessages = (data: messages): action => {
    return {
        type: 'INDEX_MESSAGES',
        payload: data,
    }
}

const postMessage = (room_id: string, value: string): any => {
    return (dispatch: any) => {
        axios.post('http://localhost:3000/api/v1/messages', {
            text: value,
            room_id: room_id,
        })
        .then(res => {
            dispatch(createMessage())}
        ).catch(err => {
            console.log(err);
            dispatch(createMessage())
        })
    }
}

const createMessage = (): action => {
    return {
        type: 'CREATE_MESSAGE',
        payload: null,
    }
}

const change = (value: string): action => {
    return {
        type: 'CHANGE_MESSAGE_VALUE',
        payload: value,
    }
}

const add = (newMessage: message): action => {
    return {
        type: 'ADD_MESSAGE',
        payload: newMessage,
    }
}

const getRoom = (room_id: string): any => {
    return (dispatch: any) => {
        axios.get('http://localhost:3000/api/v1/rooms/' + room_id)
        .then(res => {
            dispatch(getRoomName(res.data))}
        ).catch(err => {
            console.log(err);
            dispatch(getRoomName([]))
        })
    }
}

const getRoomName = (data: room): action => {
    console.log(data)
    return {
        type: 'GET_ROOM_NAME',
        payload: data.name,
    }
}

export default {
    getMessages,
    postMessage,
    change,
    add,
    getRoom,
}
