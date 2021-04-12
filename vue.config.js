// 解析项目文件路径
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 全局引入less样式变量配置
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [resolve("./src/assets/less/global-variable.less")],
    },
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          // "text-color": "#111",
          // "border-color": "#eee",
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${resolve(
            "./src/assets/less/vant-theme.less"
          )}";`,
        },
      },
    },
  },

  chainWebpack: (config) => {
    // 添加src模块文件夹别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@api", resolve("src/api"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@configs", resolve("src/configs"))
      .set("@mixins", resolve("src/mixins"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@utils", resolve("src/utils"))
      .set("@views", resolve("src/views"));

    // 使用svg-sprite-loader加载svg图标
    config.module
      .rule("svg")
      .uses.clear()
      .end()
      .exclude.add(resolve("node_modules"))
      .end()
      .include.add(resolve("src/icons"))
      .end()
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" });
    // 普通图片排除icons目录
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .exclude.add(resolve("src/icons"))
      .end();
  },
  devServer: {
    // 设置本地主机地址'0.0.0.0'
    host: "0.0.0.0",
    // 代理端口
    port: "3001",
    https: false,
  }
};
