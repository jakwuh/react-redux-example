import * as React from 'react';
import * as PropTypes from 'prop-types';

export class Provider extends React.Component {

    static contextTypes = {
        muiTheme: PropTypes.any
    };

    static childContextTypes = {
        dispatch: PropTypes.any,
        getState: PropTypes.any,
        muiTheme: PropTypes.any
    };

    getChildContext() {
        return {
            dispatch: (...args) => this.props.store.dispatch(...args),
            getState: () => this.props.store.getState(),
            muiTheme: this.context.muiTheme
        };
    }

    render() {
        return this.props.children;
    }

}
