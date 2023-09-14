const path = require('path');

module.exports = {
    entry: {
        'account': './scripts/views/account-view.ts',
        'category': './scripts/views/category-view.ts',
        'dashboard': './scripts/views/dashboard-view.ts',
        'user': './scripts/views/user-view.ts',
    },
    output: {
        path: path.resolve(__dirname, 'assets/scripts'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'scripts'),
        }
    },
    devtool: 'inline-source-map'
}