const JavaScriptObfuscator = require("webpack-obfuscator");

const defaultConfig = params => ({
    entry: {
        build: params.input
    },
    output: {
        path: __dirname + "/dist",
        filename: params.output
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".jsx"]
    },
    mode: "production",
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        })
    ]
});

module.exports = [
    {
        input: "./src/index.js",
        output: "fptu-sdk.js"
    }
].map(item => defaultConfig(item));
