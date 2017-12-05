import * as React from 'react';
import * as PropTypes from 'prop-types';

export class Provider extends React.Component {

    static contextTypes = {
        muiTheme: PropTypes.any
    };

    static childContextTypes = {
        state: PropTypes.any,
        muiTheme: PropTypes.any
    };

    getChildContext() {
        return {
            state: this.props.state,
            muiTheme: this.context.muiTheme
        };
    }

    render() {
        return this.props.children;
    }

}
