const Mock = require("mockjs"); //引入依赖包mockjs，一定要先安装

//可以设置响应的时间，模拟网络耗时，单位是ms
Mock.setup({
  timeout: "100",
});

//参数： url, 请求方式, 数据模板（可以是对象或字符串）
// Mock.mock(api.LIST,'get',userInfo);
let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context(".", true, /\.js$/);
files.keys().forEach((key) => {
  if (key === "./index.js") return;
  configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split("|");
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
