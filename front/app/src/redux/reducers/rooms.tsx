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
            value: '',
        }),

        [`${actions.rooms.change}`]: (state, action) => ({
            ...state,
            value: action.payload,
        }),

        [`${actions.rooms.show}`]: (state, action) => ({
            ...state,
            room: action.payload,
        }),
        // ActionCableで送られてきた作成したroomをroomsに追加する
        [`${actions.rooms.add}`]: (state, action) => ({
            ...state,
            rooms: state.rooms.concat(action.payload),
        }),

    },
    initialState,
)

export { roomReducer };


