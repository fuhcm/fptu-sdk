module.exports = {
    entry: {
        build: "./src/index.ts"
    },
    output: {
        path: __dirname + "/dist",
        filename: "fptu-sdk.js"
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
};
