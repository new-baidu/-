module.exports = {
  devServer: {
    proxy: {
      "/": {
        changeOrigin: true,
        target: "https://api.naccl.top/vue/shop/api/private/v1/"
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
            rootValue: 16,
            selectorBlackList: ["weui", "mu"],
            propList: ["*"],
            unitPrecision: 3
          })
        ]
      }
    }
  },
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    },

    //或者

    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      }
    }
  }
};
