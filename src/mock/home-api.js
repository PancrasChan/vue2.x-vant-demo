let homeData = {
  notices: [
    { id: 1, content: "这是一个非常正规的测试页面" },
    { id: 2, content: "这是一个非常非常牛逼的测试页面" },
    { id: 3, content: "这是一个非常low的测试页面" },
  ],
  images: [
    { id: 1, url: "https://img01.yzcdn.cn/vant/apple-1.jpg" },
    { id: 2, url: "https://img01.yzcdn.cn/vant/apple-2.jpg" },
    { id: 3, url: "https://img01.yzcdn.cn/vant/leaf.jpg" },
    { id: 4, url: "https://img01.yzcdn.cn/vant/tree.jpg" },
  ],
};

let homeArticles = [
  {
    id: 1,
    title: "一问教你解决 我的血糖升高了该咋办?",
    imageUrl: "https://img01.yzcdn.cn/vant/tree.jpg",
    createBy: "张三",
    createTime: "2021-04-10",
  },
  {
    id: 2,
    title: "炎热夏天来临，教你如何预防高血压",
    imageUrl: "https://img01.yzcdn.cn/vant/leaf.jpg",
    createBy: "王五",
    createTime: "2021-04-10",
  },
  {
    id: 3,
    title: "体重超标了，一招教你瘦成闪电腰",
    imageUrl: "https://img01.yzcdn.cn/vant/apple-1.jpg",
    createBy: "陈后主",
    createTime: "2021-04-10",
  },
];

export default {
  "get|/home/index": () => {
    return {
      status: 200,
      message: "请求成功",
      data: homeData,
    };
  },
  "get|/home/articles": () => {
    return {
      status: 200,
      message: "请求成功",
      data: homeArticles,
    };
  },
};
