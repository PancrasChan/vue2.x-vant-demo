<template>
  <div class="page">
    <van-nav-bar left-arrow left-text="返回" title="测试标题" />
    <van-cell title="姓名" value="张三" />
    <div class="container02">
      <p>这是一个全局less变量测试</p>
      <van-button type="primary" text="测试定制主题按钮" />
    </div>
  </div>
</template>

<script>
// import { Cell, Button, NavBar } from "vant";
export default {
  name: "TestVant",
  // components: {
  //   [Cell.name]: Cell,
  //   [Button.name]: Button,
  //   [NavBar.name]: NavBar,
  // },
};
</script>

<style lang="less" scoped>
.page {
  text-align: left;
  .container02 {
    text-align: center;
    p {
      color: @primary;
    }
  }
}
</style>
