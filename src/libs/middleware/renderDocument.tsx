import * as React from 'react';
import {Document} from 'components/Document/Document';
import {renderToString} from 'react-dom/server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'components/Common/Provider';

export default store => (req, res) => {
    let string = renderToString(
        <MuiThemeProvider>
            <Provider state={store.getState()}>
                <Document/>
            </Provider>
        </MuiThemeProvider>
    );

    res.end(string);
}

global.navigator = {userAgent: 'all'};
