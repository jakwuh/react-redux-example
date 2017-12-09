import * as React from 'react';
import * as PropTypes from 'prop-types';

export class BaseComponent extends React.Component {

    static contextTypes = {
        getState: PropTypes.any,
        dispatch: PropTypes.any
    };

}
