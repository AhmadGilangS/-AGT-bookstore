module.exports = {

  devServer:{
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }, 
  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ],

  
}
