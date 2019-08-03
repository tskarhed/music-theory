var path = require('path');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts',  '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts and js files.
            test: /\.(ts|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};