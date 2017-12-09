import * as webpack from 'webpack';
import {resolve, join} from 'path';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

let root = resolve(__dirname, '../');
let src = join(root, 'src');
let dist = join(root, 'dist');

let config: webpack.Configuration = {
    entry: {
        index: join(src, 'entries/client.ts'),
        styles: join(src, 'entries/client.css')
    },

    devtool: 'inline-source-map',
    target: 'web',

    output: {
        filename: '[name].js',
        path: join(dist, 'client')
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
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            IS_SERVER: false,
            IS_CLIENT: true,
            CLIENT_ID: JSON.stringify('f10de77025978ee1ed0b')
        })
    ]
};

export default config;
