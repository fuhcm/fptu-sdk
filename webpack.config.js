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
    node: {
        buffer: false
    }
});

module.exports = [
    {
        input: "./src/index.js",
        output: "fptu-sdk.js"
    }
].map(item => defaultConfig(item));
