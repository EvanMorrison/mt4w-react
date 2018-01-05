const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')


module.exports = (env = {}) => {
    const isProduction = env.production === true;

    return {
        
        entry: (() => {
            if (isProduction) return {
                index: './app/index.js',
                material: 'material-ui',
                vendor: [
                        'react',
                        'react-dom',
                        'react-router-dom',
                        'react-scroll-to-component',
                        'styled-components'
                ]
            }
            else {
                return [
                         'react-hot-loader/patch',
                         'webpack-hot-middleware/client',
                         './app/index.js'
                        ]
            }
        })(),

        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: (() => {
                if (isProduction) return '[name].[chunkhash].js'
                else return '[name].bundle.js'
            })()
        },

        devtool: (() => {
            if (isProduction) return 'hidden-source-map'
            else return 'cheap-module-eval-source-map'
        })(),

        devServer: (() => { 
            if (isProduction) return {}
            else return {
                contentBase: './dist',
                historyApiFallback: {
                    index: '/'
                }
            }
        })(),

        module: {
            rules: [
                {test:/\.js$/, exclude: /node_modules/, use: ['babel-loader']},
                { test: /\.html$/, exclude: /node_modules/, use: 'raw-loader' },
                {test:/\.(jpe?g|png|gif)$/, use: [
                                                { 
                                                    loader: "url-loader",
                                                    options: {
                                                        limit: 10000,
                                                        name: 'assets/[name].[hash].[ext]'
                                                    }
                                                }
                                            ]
                },
                { test: /\.scss$/, 
                    use: ExtractTextPlugin.extract({
                          use: [
                            {
                              loader: 'css-loader', 
                              options: { sourceMap: true }
                            },
                            {
                              loader: 'sass-loader',
                              options: { sourceMap: true }
                            }
                          ],    
                          // fallback to inlining styles when extracting is disabled in development
                          fallback: 'style-loader',
                        })
                },
                {test:/\.css$/, use: (() => {  
                      if (isProduction) return ExtractTextPlugin.extract({
                                          fallback: 'style-loader',
                                          use: 'css-loader?sourceMap'
                                      })
                      else return ['style-loader', 'css-loader']
                  })()
                },
                { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                  use: [{
                          loader: 'url-loader',
                          options: {
                            limit: 33000,
                            name: 'assets/fonts/[name].[hash].[ext]'
                          }
                  }]}  
            ]
        },

        plugins: (() => {
            const pluginList = [
                // plugins for both environments
                new HtmlWebpackPlugin({
                    template: __dirname + '/app/index.html',
                    filename: 'index.html',
                    inject: 'body'
                }),
                new ExtractTextPlugin({
                    filename: '[name].[contenthash].css',
                    disable: !isProduction // will use fallback in-line loader in development
                })
            ]
            
            if (isProduction) {
                pluginList.push(
                    // plugins for production only
                    new CleanWebpackPlugin(['dist']),
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('production'),
                    }),
                    new webpack.HashedModuleIdsPlugin(),
                    new webpack.optimize.CommonsChunkPlugin({
                        name: 'vendor'
                    }),
                    new webpack.optimize.CommonsChunkPlugin({
                        name: 'runtime'
                    }),
                    // new CompressionPlugin({  
                    //     asset: "[path].gz[query]",
                    //     algorithm: "gzip",
                    //     threshold: 10240,
                    //     test: /\.js$|\.css$|\.html$/,
                    //     minRatio: 0.8
                    // })
                )
            } else {
                pluginList.push(
                    // plugins for development only
                    new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoEmitOnErrorsPlugin()
                )
            }
            return pluginList
    })()
        
    }

}