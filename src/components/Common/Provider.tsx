import * as React from 'react';
import * as PropTypes from 'prop-types';

export class Provider extends React.Component {

    static contextTypes = {
        muiTheme: PropTypes.any
    };

    static childContextTypes = {
        dispatch: PropTypes.any,
        state: PropTypes.any,
        muiTheme: PropTypes.any
    };

    getChildContext() {
        return {
            dispatch: this.props.store.dispatch.bind(this.store),
            state: this.props.store.getState(),
            muiTheme: this.context.muiTheme
        };
    }

    render() {
        return this.props.children;
    }

}
