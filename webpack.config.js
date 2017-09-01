/**
 * Created by lhy on 2017/4/26.
 */
'use strict';
// Modules
const webpack = require('webpack');
const helpers = require('./webpack/helpers');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const precss = require('precss');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                "include": __dirname + "/src/",
                exclude: /node_module/,
                query: {
                    plugins: [["import", {libraryName: "antd", style: "css"}]]//按需加载样式没有生效，原因可能是exclude
                }
            },
            {
                test: /\.(css|less)$/,
                // use: ['style-loader', 'css-loader?sourceMap', 'less-loader'],
                loader: 'style-loader!css-loader!postcss-loader??modules'
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader?sourceMap', 'stylus-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=5000&name=img/[name]-[hash:5].[ext]'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ],

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],

    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
    /*plugins: [
     // new webpack.HotModuleReplacementPlugin(),//热加载插件
     new webpack.LoaderOptionsPlugin({
     options: {
     postcss: function () {
     return [precss, autoprefixer];
     },
     devServer: {
     contentBase: "./src",//本地服务器所加载的页面所在的目录
     colors: true,//终端中输出结果为彩色
     historyApiFallback: true,//不跳转
     inline: true//实时刷新
     },
     }
     })
     ]*/
};


/*module.exports = {
 entry: __dirname + '/src/app.js',
 output: {
 // path:__dirname + '/build',
 // publicPath: '/webBlog/build/',
 path: __dirname + '/dist',
 publicPath: '/dist/',
 filename: 'bundle.js'
 },
 module: {
 rules: [
 {
 test: /\.jsx?$/,
 loader: 'babel-loader'
 /!* exclude:/node_module/,
 query: {
 plugins: [["import", { libraryName: "antd", style: "css" }]]//按需加载样式没有生效，原因可能是exclude
 }*!/
 },
 {
 test: /\.(css|less)$/,
 use: ['style-loader', 'css-loader?sourceMap', 'less-loader'],
 },
 {
 test: /\.styl$/,
 use: ['style-loader', 'css-loader?sourceMap', 'stylus-loader'],
 },
 {
 test: /\.(png|jpg|gif)$/,
 loader: 'url-loader?limit=5000&name=img/[name]-[hash:5].[ext]'/!*看看url-loader打包图片在不同文件中（css,jsx,index.html中）的写法区别*!/
 }
 ],
 },
 };*/

