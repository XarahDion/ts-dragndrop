const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    performance: {
        hints: false,
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "./"),
        },
        compress: true,
        port: 3000,
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
