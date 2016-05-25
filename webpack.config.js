const path = require("path");

module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
        }]
    }
};
