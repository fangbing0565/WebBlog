var webpack = require('webpack');
module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: __dirname + '/dist/',
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel',
                query: {
                    presets: [ "react","es2015","stage-0"],  // 这部分内容可以单独写成一个babelrc文件
                    "env": {
                        "development": {
                            "plugins": [
                                ["react-transform", {
                                    "transforms": [{
                                        "transform": "react-transform-hmr",

                                        "imports": ["react"],

                                        "locals": ["module"]
                                    }]
                                }
                                ]
                            ]
                        }
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'less-loader'],
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'stylus-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=5000&name=img/[name]-[hash:5].[ext]'/*看看url-loader打包图片在不同文件中（css,jsx,index.html中）的写法区别*/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
        // 这里可以使用alias配置项，可以显示的指定我们常用的一些库，避免webpack自己的查找
    },
    devServer: {
        contentBase: "./src",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};


/*
module.exports = {
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
};
*/

