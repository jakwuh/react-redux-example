import express from 'express';
import createRenderDocument from 'libs/middleware/renderDocument';
import {createStore} from 'redux'
import state from 'state.json'

function reducer(state) {
    return state;
}

let store = createStore(reducer, state);
let app = express();
let port = process.env.PORT || 3000;

app.get('/', createRenderDocument(store));

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
