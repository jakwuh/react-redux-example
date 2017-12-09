import * as webpack from 'webpack';
import {resolve, join} from 'path';
import * as nodeExternals from 'webpack-node-externals';

let root = resolve(__dirname, '../');
let src = join(root, 'src');
let dist = join(root, 'dist');

let config: webpack.Configuration = {
    entry: join(src, 'entries/server.ts'),

    devtool: 'inline-source-map',
    target: 'node',
    externals: [nodeExternals()],

    output: {
        filename: 'server.js',
        path: join(dist, 'server')
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        modules: [
            src,
            join(root, 'node_modules')
        ]
    },

    module: {
        rules: [{
            test: /\.[jt]sx?$/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            IS_SERVER: true,
            IS_CLIENT: false,
            ASSETS_ROOT: JSON.stringify(join(dist, 'client')),
            CLIENT_ID: JSON.stringify('f10de77025978ee1ed0b'),
            CLIENT_SECRET: JSON.stringify('55b29302d04d21f8fc9af8be0e1d4d2af9fd0d6d')
        })
    ]
};

export default config;
