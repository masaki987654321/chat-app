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
        ['INDEX_ROOMS']: (state, action) => ({
            ...state,
            rooms: action.payload,
        }),
        
        ['CREATE_ROOM']: (state, action) => ({
            ...state,
            value: '',
        }),

        ['CHANGE_ROOM_VALUE']: (state, action) => ({
            ...state,
            value: action.payload,
        }),

        // ActionCableで送られてきた作成したroomをroomsに追加する
        ['ADD_ROOM']: (state, action) => ({
            ...state,
            rooms: state.rooms.concat(action.payload),
        }),
    },
    initialState,
)

export { roomReducer };


