import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Component = ({history, user}) =>  {
    const logout = () => {
        window.location.href = '/logout';
    };

    return (
            <AppBar
                title="Courchera"
                showMenuIconButton={false}
                iconElementRight={
                    user ? <Avatar src={user.avatar_url} onClick={logout}/> : <FlatButton
                        label="Login"
                        href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${CLIENT_ID}`}
                    />
                }
                onTitleClick={() => history.push('/')}
                titleStyle={{
                    cursor: 'pointer'
                }}
            />
    )
};

export const DocumentHead = withRouter(Component);
