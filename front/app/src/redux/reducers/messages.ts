import { handleActions } from 'redux-actions';

type initialState = {
    messages: any[],
    value: string,
    text: string,
    roomName: string,
}
// todo interfave しっかり書く
// reducer action.apyload で　コンパイルエラー出る
export const initialState: any = {
    messages: [],
    value: '',
    text: '',
    roomName: '',
};

const messageReducer = handleActions(
    {
        // todo actionTypes作る
        ['INDEX_MESSAGES']: (state, action) => ({
            ...state,
            messages: action.payload,
            value: '',
        }),

        ['CREATE_MESSAGE']: (state, action) => ({
            ...state,
            value: '',
        }),

        ['CHANGE_MESSAGE_VALUE']: (state, action) => ({
            ...state,
            value: action.payload,
        }),

        // ActionCableで送られてきた作成したmessageをmessagesに追加する
        ['ADD_MESSAGE']: (state, action) => ({
            ...state,
            messages: state.messages.concat(action.payload),
        }),

        ['GET_ROOM_NAME']: (state, action) => ({
            ...state,
            roomName: action.payload,
        }),
},
    initialState,
)

export { messageReducer };


