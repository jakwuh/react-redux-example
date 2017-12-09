import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'components/Common/Provider';
import {Document} from 'components/Document/Document';
import * as React from 'react';
import {BrowserRouter, StaticRouter} from 'react-router-dom';

export function renderDom(store, req?) {
    if (IS_SERVER) {
        global.navigator = {userAgent: req.headers['user-agent']};

        return <MuiThemeProvider>
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <Document/>
                </StaticRouter>
            </Provider>
        </MuiThemeProvider>
    } else {
        return <MuiThemeProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Document/>
                </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    }
}

