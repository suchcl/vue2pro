const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // 在有多个loader时，webpack的读取顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
        ]
    }
};