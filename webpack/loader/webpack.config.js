const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath:"dist/"
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
                            name:"images/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};