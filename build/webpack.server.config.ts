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
            loader: 'babel-loader',
            query: {
                presets: [
                    'env',
                    'react'
                ],
                plugins: [
                    'transform-class-properties'
                ]
            }
        }]
    },

    plugins: []
};

export default config;
