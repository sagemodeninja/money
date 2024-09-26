const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        'dashboard-view': './scripts/views/dashboard-view.ts'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'scripts/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                // For *.component.scss
                test: /\.component\.s[ac]ss$/,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                // For *.scss
                test: /\.s[ac]ss$/,
                exclude: /\.component\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'scripts'),
            '@styles': path.resolve(__dirname, 'styles'),
        }
    },
    devtool: 'inline-source-map'
}