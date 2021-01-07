module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/',
    assetsDir: 'static',
    devServer: {
        host: '192.168.1.183',
        // 设置默认端口
        port: 8080,
        // // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                target: 'http://www.51takeit.com',
                // target: 'https://js.51takeit.com',
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'http://www.51takeit.com'
                    // '^/api': 'https://js.51takeit.com/api'
                }
            }
        }
    },
    lintOnSave: false,
    productionSourceMap:false
}