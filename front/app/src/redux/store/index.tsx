import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const store: any = createStore(
    rootReducer(),
    applyMiddleware(thunk, logger)
);
