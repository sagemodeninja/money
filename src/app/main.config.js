const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

module.exports = () => {
    return {
        entry: {
            main: "./main.ts",
            "preloaders/launcher": "./scripts/preloaders/launcher-preload.ts",
        },
        target: "electron-main",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js"],
            alias: {
                "@": path.resolve(__dirname, "scripts"),
                "@static": path.resolve(__dirname, "static"),
            }
        },
    }
}
