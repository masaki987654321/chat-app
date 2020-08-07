import { handleActions } from 'redux-actions';

type initialState = {
    myIp: string,
}
// todo interfave しっかり書く
// reducer action.apyload で　コンパイルエラー出る
const initialState: any = {
    myIp: '',
};

const ipReducer = handleActions(
    {
        // todo actionTypes作る
        ['UPDATE_IP']: (state, action) => ({
            ...state,
            myIp: action.payload,
        })
    },
    initialState,
)

export { ipReducer };


