import express from 'express';
import cookieParser from 'cookie-parser';
import createRenderDocument from 'libs/middleware/renderDocument';
import * as axios from 'axios';

let app = express();
let port = process.env.PORT || 3000;

app.use(cookieParser());

app.get('/oauth_callback', async (req, res) => {
    let {code} = req.query;

    let {data: {access_token}} = await axios.post('https://github.com/login/oauth/access_token', {
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
    }, {
        headers: {
            'Accept': 'application/json'
        }
    });

    res.cookie('access_token', access_token, {
        maxAge: 1000000000,
        sameSite: true
    });

    res.redirect('/');
});

app.get('/logout', (req, res) => {
    res.clearCookie('access_token');
    res.redirect('/');
});

app.use('/assets', express.static(ASSETS_ROOT));
app.get('*', createRenderDocument());

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
