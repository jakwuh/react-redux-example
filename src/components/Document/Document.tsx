import * as React from 'react';
import * as PropTypes from 'prop-types';
import {BaseComponent} from 'components/Common/BaseComponent';
import {DocumentHead} from 'components/Document/DocumentHead';
import {CardsList} from 'components/Card/CardsList';

export class Document extends BaseComponent {

    static contextTypes = {
        state: PropTypes.any
    };

    render() {
        let {state} = this.context;

        return (
            <html>
            <head>
                <meta charSet="utf8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Courchera</title>
            </head>
            <body>
            <DocumentHead/>
            <CardsList {...state}/>
            </body>
            </html>
        )
    }

}
