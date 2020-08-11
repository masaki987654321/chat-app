import axios from 'axios';

// 型の付けかた調べる
type rooms = any;
type room = any[];
type action = {
    type: string,
    payload: any,
};

const getRooms = (): any => {
    return (dispatch: any) => {
        axios.get('http://localhost:3000/api/v1/rooms')
            .then(res => {
                dispatch(indexRooms(res.data))}
            ).catch(err => {
                console.log(err);
                dispatch(indexRooms([]))
            })
    }
}

const indexRooms = (data: rooms): action => {
    return {
        type: 'INDEX_ROOMS',
        payload: data,
    }
}

const postRoom = (value: string): any => {
    return (dispatch: any) => {
        axios.post('http://localhost:3000/api/v1/rooms', {
            name: value,
        })
        .then(res => {
            dispatch(createRoom())}
        ).catch(err => {
            console.log(err);
            dispatch(createRoom())
        })
    }
}

const createRoom = (): action => {
    return {
        type: 'CREATE_ROOM',
        payload: null,
    }
}

const change = (value: string): action => {
    return {
        type: 'CHANGE_ROOM_VALUE',
        payload: value,
    }
}

const add = (newRoom: room): action => {
    return {
        type: 'ADD_ROOM',
        payload: newRoom,
    }
}

export default {
    getRooms,
    postRoom,
    change,
    add,
}