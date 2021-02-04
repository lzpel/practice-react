module.exports = {
    // development or production
    mode: "development",

    entry: "./src/index.ts",
    output: {
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
//src/index.tsからdist/main.jsを生成するようwebpackを設定する
