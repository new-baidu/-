module.exports = {
  devServer: {
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "http://119.23.53.78:8888"
      }
    }
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/common.scss";`,
      },
    }
  }
};
