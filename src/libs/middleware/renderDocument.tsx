import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {renderDom} from 'libs/utils/renderDom';
import {createStore} from 'entries/common';
import state from 'state.json'
import * as axios from 'axios';
import {setCurrentUser} from 'entities/User/actions';

export default () => async (req, res) => {
    let store = createStore(state);

    if (req.cookies.access_token) {
        let {access_token} = req.cookies;

        try {
            let {data} = await axios.get('https://api.github.com/user', {
                params: {access_token}
            });

            let {login, avatar_url} = data;
            let user = {login, avatar_url};

            store.dispatch(setCurrentUser(user));
        } catch (error) {
            console.error(error);
        }

    }

    let string = renderToString(renderDom(store, req, res));

    res.end(string);
}
