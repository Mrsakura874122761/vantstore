
module.exports = {
    lintOnSave: false,
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
   
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
     open: process.platform === 'darwin',
     host: '0.0.0.0',
     port: 8080,
     https: false,
     hotOnly: false,
     proxy: {

        "/tab":{
            target:"http://localhost:5555",
            changeOrigin:true,
            pathRewrite:{
                "^/tab":""
            },
            
           
        }
     }, // 设置代理
     before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
     // ...
    }
}