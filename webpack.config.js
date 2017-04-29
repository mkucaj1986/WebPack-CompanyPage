path = require('path');
module.exports = {
    devtool: 'sourcemap',
    output: {
        filename: 'bundle.js'
    },
    context: path.join(__dirname, './'),
    resolve: {
        alias: {
            resources: path.join(__dirname, './client/app/resources')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/app\/lib/, /node_modules/],
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loaders: [
                'style', '' +
                'css',
                'sass?outputStyle=expanded&includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib'),
                'sass-resources'
            ]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }]
    },
    sassResources: path.resolve(__dirname, './client/app/resources/stylesheets/base.scss')
};
