import 'babel-polyfill';
import {createStore as createReduxStore} from 'redux'

function reducer(state) {
    return state;
}

export function createStore(data) {
    return createReduxStore(reducer, data);
}
