const path = require("path"); // 引入path包，获取当前文件的绝对路径
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"dist"), // __dirname,node上下文中的一个全局变量，用来获取当前文件的绝对路径
        filename: "bundle.js"
    }
};