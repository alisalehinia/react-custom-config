const webpack = require("webpack")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
    mode: "development",
    devServer: {
        hot: true
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NAME": JSON.stringify("development env var")
        }),
        new ReactRefreshPlugin()
    ]
}