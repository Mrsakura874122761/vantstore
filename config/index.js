const deploy = process.env.NODE_DEPLOY || 'prod'
const envBase = require('./env/env')
const envDeploy = require(`./env/env.${deploy}`)
const env = Object.assign(envBase, envDeploy)
const proxyMap = {
  '/api/': {
    target: env.API_HOST,
    changeOrigin: true,
    pathRewrite: { '/api/': '/api/' }
  },
  '/uploads/': {
    target: env.CDN_HOST,
    changeOrigin: true,
    pathRewrite: { '/uploads/': '/uploads/' }
  },
}

module.exports = {
  env, //环境变量
  build: {
    assetsPublicPath: env.CDN_HOST,
    proxyTable: proxyMap
  },
  dev: {
    assetsPublicPath: undefined,
    proxyTable: proxyMap
  }
}