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
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader"
            }
        ]
    }
});

module.exports = [
    {
        input: "./src/index.ts",
        output: "fptu-sdk.js"
    }
].map(item => defaultConfig(item));
