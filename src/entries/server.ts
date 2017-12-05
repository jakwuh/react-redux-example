import express from 'express';
import createRenderDocument from 'libs/middleware/renderDocument';
import {createStore} from 'redux'
import state from 'state.json'

function reducer(state) {
    return state;
}

let store = createStore(
    reducer,
    state
);

const app = express();

app.get('/', createRenderDocument(store));

app.listen(3000, () => console.log('Server is listening at http://localhost:3000'));
