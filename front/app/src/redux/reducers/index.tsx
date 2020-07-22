import { combineReducers } from 'redux';
import { roomReducer } from './rooms';
import { messageReducer } from './messages';
import { ipReducer } from './ipAddress';

const rootReducer = () => combineReducers({
    roomReducer,
    messageReducer,
    ipReducer,
});

export default rootReducer;