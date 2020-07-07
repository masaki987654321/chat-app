import { handleActions } from 'redux-actions';
import { actions } from '../actions/index';
import { initialState } from '../store/initialState';

const roomReducer = handleActions(
    {
        // todo actionTypes作る
        'create_room' : (state, action) => ({
            ...state,
            room: actions.rooms.create.payload,
        }),
        // todo
        // 'destory_room' : (state, action) => ({
        //     ...state,
        //     room: actions.rooms.create.payload,
        // }),
    },
    initialState,
)

export { roomReducer };


