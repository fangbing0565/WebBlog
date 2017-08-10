/**
 * Created by lhy on 2017/4/26.
 */
module.exports = {
    entry: __dirname + '/js/main.js',
    output: {
        // path:__dirname + '/build',
        // publicPath: '/webBlog/build/',
        path:__dirname + '/build',
        publicPath: '/build/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader'
               /* exclude:/node_module/,
                query: {
                    plugins: [["import", { libraryName: "antd", style: "css" }]]//按需加载样式没有生效，原因可能是exclude
                }*/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },
           /* {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                query:{
                    name:'img/[name]-[hash:5].[ext]'
                }
            },*/
           {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=5000&name=img/[name]-[hash:5].[ext]'/*看看url-loader打包图片在不同文件中（css,jsx,index.html中）的写法区别*/
            }
        ],
    },
};

