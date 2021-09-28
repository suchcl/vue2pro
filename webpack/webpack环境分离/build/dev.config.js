const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");

module.exports = WebpackMerge(baseConfig,{
// 该配置只需要在开发环境中使用，生产环境不需要
devServer:{
    contentBase: "./dist",
    inline: true
}
})