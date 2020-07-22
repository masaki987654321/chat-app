import rootReducer from '../reducers/index';
import { createStore } from 'redux';

export const configureStore = () => {
    const store = createStore(rootReducer());
    return store;
};