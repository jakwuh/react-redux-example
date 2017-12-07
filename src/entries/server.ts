import express from 'express';
import createRenderDocument from 'libs/middleware/renderDocument';
import {createStore} from './common';
import state from 'state.json'

let app = express();
let port = process.env.PORT || 3000;

app.use('/assets', express.static(ASSETS_ROOT));
app.get('*', createRenderDocument(createStore(state)));

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
