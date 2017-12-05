import AppBar from 'material-ui/AppBar';
import * as React from 'react';

export function DocumentHead() {
    return (
        <AppBar
            title="Courchera"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
        />
    )
}
