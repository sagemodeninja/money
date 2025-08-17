const path = require('path')
const dotenv = require('dotenv')
const entries = require('./auto-entry')
const webpack= require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { create } = require('./scss-alias')

dotenv.config()

module.exports = (_, {mode}) => {
    const isDevelopment = mode === 'development'

    return {
        entry: entries.load({ type: 'entry' }),
        output: {
            path: path.resolve(__dirname, 'build/renderer'),
            filename: 'scripts/[name].js',
            clean: true
        },
        plugins: [
            ...entries.load({ type: 'view' }),
            new MiniCssExtractPlugin({
                filename : 'styles/[name].css'
            }),
            new webpack.DefinePlugin({
                'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL)
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.component\.s[ac]ss$/,
                    use: [
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: { api: 'modern' }
                        }
                    ],
                },
                {
                    test: /\.s[ac]ss$/,
                    exclude: /\.component\.s[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                // api: 'modern',
                                sassOptions: {
                                    importer: create({
                                        '@styles': path.resolve(__dirname, 'styles'),
                                    })
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/fonts/[name]-[hash][ext]'
                    }
                },
                {
                    test: /\.json/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/json/[name]-[hash][ext]'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.scss'],
            alias: {
                '@': path.resolve(__dirname, 'scripts'),
                '@static': path.resolve(__dirname, 'static'),
            }
        },
        devtool: isDevelopment ? 'inline-source-map' : false
    }
}