import { handleActions } from 'redux-actions';
import { actions } from '../actions/index';

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
        [`${actions.ipAdress.getAdress}`]: (state, action) => ({
            ...state,
            myIp: action.payload,
        })
    },
    initialState,
)

export { ipReducer };


