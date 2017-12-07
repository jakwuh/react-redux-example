import AppBar from 'material-ui/AppBar';
import * as React from 'react';
import {Link} from 'react-router-dom';

export function DocumentHead() {
    return (
        <Link to="/">
            <AppBar
                title="Courchera"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                showMenuIconButton={false}
            />
        </Link>
    )
}
