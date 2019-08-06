module.exports = {
  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true
    }
  },
  devServer:{
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}
