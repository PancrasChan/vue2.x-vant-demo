module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // vant按需加载
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        // vant定制主题必须使用--指定less样式路径
        style: (name) => `${name}/style/less`,
        // 使用这个默认加载的是css样式文件
        // style: true,
      },
      "vant",
    ],
  ],
};
