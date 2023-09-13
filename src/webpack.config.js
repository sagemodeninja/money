const path = require('path');

module.exports = {
    entry: {
        'app': './scripts/app.ts',
        'account': './scripts/views/account.ts',
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