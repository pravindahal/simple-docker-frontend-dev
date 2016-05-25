module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/dist',
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
