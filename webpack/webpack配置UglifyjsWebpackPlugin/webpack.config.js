const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // 在有多个loader时，webpack的读取顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            // less-loader
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
                // use: [
                //     {"loader": "style-loader"},
                //     {"loader": "css-loader"},
                //     {"loader": "less-loader"}
                // ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当文件小于limit的值时，就会直接通过url-loader将文件转换成base64，减少一次http请求
                            // 当文件大小大于limit的值时，就会通过file-loader对文件做一些处理，并将文件转移到编译的目录目录下，目标目录需要publicPath动态对应一下
                            limit: 8192,
                            name: "images/[name].[hash:8].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    resolve: {
        // 配置需要省略的扩展名
        extensions:[".js",".vue",".css",".less"],
        alias: {
            /**
             * 在执行import Vue from "vue";时，指定使用vue/dist/vue.esm.js去编译vue文件，默认使用的是vue/dist/vue.runtime.js编译器
             */
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins:[
        // 这是一个简单的输出，可以有很多的参数、功能的配置
        new webpack.BannerPlugin("版权归大哥大所有！"),
        new HtmlWebpackPlugin({
            template:"./index.html"
        }),
        new UglifyjsWebpackPlugin()
    ]
};