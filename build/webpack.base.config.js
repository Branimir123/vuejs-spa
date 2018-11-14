const path = require('path');

const config = {
    entry: {
        build: path.resolve(__dirname, '../src/client-entry.js')
    },
    mode: 'development',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'assets/js/[name].js'
    }
};

module.exports = config;