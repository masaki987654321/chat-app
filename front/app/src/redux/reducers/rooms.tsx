import { handleActions } from 'redux-actions';
import { actions } from '../actions/index';

type initialState = {
    rooms: any[],
    roon: any[],
    value: string,
    text: string,
}
// todo interfave しっかり書く
// reducer action.apyload で　コンパイルエラー出る
export const initialState: any = {
    rooms: [],
    room:[],
    value: '',
    text: '',
};

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
            room: action.payload,
        }),

    },
    initialState,
)

export { roomReducer };


