import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {renderDom} from 'libs/utils/renderDom';

export default store => (req, res) => {
    let string = renderToString(renderDom(store, req, res));

    res.end(string);
}
