module.exports = {
  devServer: {
    proxy: {
      "/": {
        changeOrigin: true,
        target: "http://119.23.53.78:8888/api/private/v1/"
      }
    }
  },
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/css/common.scss";`
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 16, // 换算的基数
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"],
            unitPrecision: 3
          })
        ]
      }
    }
  }
};
