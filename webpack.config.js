const path = require('path');
const autoDiscovery = require('./src/autoloader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: autoDiscovery.lookupEntries('./src/app'),
    output: {
        filename: 'static/scripts/[name].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        ...autoDiscovery.lookupViews('./src/app'),
        new MiniCssExtractPlugin({
            filename: 'static/styles/[name].css'
        }),
        new CopyPlugin({
            patterns: [
                './src/.htaccess',
                { from: './src/api', to: 'api' },
                { from: './src/app/includes', to: 'app/includes' },
                { from: './src/app/router.php', to: 'app/router.php' },
                { from: './src/static', to: 'static' },
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src/scripts'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    devtool: 'inline-source-map'
}