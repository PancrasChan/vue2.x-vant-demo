let userInfo = {
  username: "test00001",
  realname: "张三",
};

export default {
  "post|/sys/login": () => {
    return {
      code: 200,
      message: "请求成功",
      result: userInfo,
    };
  },
};
