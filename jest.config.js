module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    verbose: true,
    globals: {
        APP_ENV: "https://api.fptu.tech"
    }
};
