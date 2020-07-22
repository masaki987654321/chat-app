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
            messages: action.payload,
            value: '',
        }),

        [`${actions.messages.change}`]: (state, action) => ({
            ...state,
            value: action.payload,
        }),
    },
    initialState,
)

export { messageReducer };


