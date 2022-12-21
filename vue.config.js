module.exports = {
    lintOnSave: false,
    publicPath: '/',
    configureWebpack: {
        output: {
            filename: 'js/[name].[hash].js',
            chunkFilename: 'js/[id].[hash].js'
        },
        devtool: false,
    },
}
