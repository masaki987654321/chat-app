import { handleActions } from 'redux-actions';
import { actions } from '../actions/index';
import { initialState } from '../store/initialState';

const roomReducer = handleActions(
    {
        // todo actionTypes作る
        [`${actions.rooms.index}`]: (state, action) => ({
            ...state,
            rooms: action.payload,
        }),
        
        [`${actions.rooms.create}`]: (state, action) => ({
            ...state,
            rooms: action.payload,
            value: '',
        }),
        // todo　destroy　reduxerを書く
        // 'destory_room' : (state, action) => ({
        //     ...state,
        //     room: actions.rooms.create.payload,
        // }),
        [`${actions.rooms.change}`]: (state, action) => ({
            ...state,
            value: action.payload,
        }),

        [`${actions.rooms.show}`]: (state, action) => ({
            ...state,
            messages: action.payload,
            value: '',
        }),

        [`${actions.messages.create}`]: (state, action) => ({
            ...state,
            messages: action.payload,
            value: '',
        }),
    },
    initialState,
)

export { roomReducer };


