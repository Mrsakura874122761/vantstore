
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './vue' : '/',
    lintOnSave: false,
    outputDir: './web/vue', // 构建时的输出目录
    // assetsDir: 'static', // 放置静态资源的目录
    // indexPath: 'index.html', // html 的输出路径
    filenameHashing: true, // 文件名哈希值
    // outPut:{
    //     filename:'static/js/[name].[contenthash:8].js',
    //     chunksFilename:'static/js/[name].[contenthash:8].js'
    // },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode

    // PWA 插件相关配置r
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    //除去打包生成的.map 文件一般用于出现error时追踪文件
    productionSourceMap: false,
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            "/tab": {
                target: "http://localhost:5555",
                changeOrigin: true,
                pathRewrite: {
                    "^/tab": ""
                },


            }
        }, // 设置代理
        before: app => { }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs/,
                    include: /node_modules/,
                    type: 'javascript/auto'
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
            }
        },
        plugins: [
            // new BundleAnalyzerPlugin({
            //  可以是`server`，`static`或`disabled`。
            //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
            //  在“静态”模式下，会生成带有报告的单个HTML文件。
            //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
            // 使用npm run analyzer-serve / npm run analyzer-build
            // reportFilename: 'report.html',
            // analyzerMode: process.env.use_analyzer ? 'static' : 'disabled',
            //     analyzerPort: 8001
            //  })
        ]
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
        //小于10k的图片文件转成base64
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
        //压缩混淆默认就是true其实不加也一样
        config.optimization.minimize(true)
        config.optimization.splitChunks({
            cacheGroups: {
                commons: {
                    name: 'chunk-commons',
                    test: path.resolve('src'), // can customize your rules
                    minSize: 100, //大小超过100个字节
                    minChunks: 3, //  minimum common number
                    priority: 5,
                    reuseExistingChunk: true
                },
                // 第三方库
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial',
                    reuseExistingChunk: true
                    // enforce: true // 为true时，忽略minSize，minChunks，
                },
                vant: {
                    name: 'chunk-vant',
                    test: /[\\/]node_modules[\\/]vant[\\/]/,
                    chunks: 'all',
                    priority: 20,
                    reuseExistingChunk: true,
                    enforce: true
                },
            }
        })
    },
    // css:{
    //   sourceMap:true
    // },

    // 第三方插件配置
    pluginOptions: {

    }
}