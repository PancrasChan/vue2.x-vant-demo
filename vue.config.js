// 解析项目文件路径
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          "text-color": "#111",
          "border-color": "#eee",
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "your-less-file-path.less";`,
        },
      },
    },
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set('@configs', resolve('src/configs'))
      .set("@mixins", resolve("src/mixins"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@utils", resolve("src/utils"))
      .set("@views", resolve("src/views"));
  }
};
