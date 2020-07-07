import { combineReducers } from 'redux';
import { roomReducer } from './rooms';

const rootReducer = () => combineReducers({roomReducer});

export default rootReducer;