import { handleActions } from 'redux-actions';
import { actions } from '../actions/index';

type initialState = {
    messages: any[],
    value: string,
    text: string,
}
// todo interfave しっかり書く
// reducer action.apyload で　コンパイルエラー出る
export const initialState: any = {
    messages: [],
    value: '',
    text: '',
};

const messageReducer = handleActions(
    {
        // todo actionTypes作る
        [`${actions.messages.show}`]: (state, action) => ({
            ...state,
            messages: action.payload,
            value: '',
        }),

        [`${actions.messages.create}`]: (state, action) => ({
            ...state,
            value: '',
        }),

        [`${actions.messages.change}`]: (state, action) => ({
            ...state,
            value: action.payload,
        }),

        // ActionCableで送られてきた作成したmessageをmessagesに追加する
        [`${actions.messages.add}`]: (state, action) => ({
            ...state,
            messages: state.messages.concat(action.payload),
        }),
},
    initialState,
)

export { messageReducer };


