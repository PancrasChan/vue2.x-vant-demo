<template>
  <div>
    <p>这是一个全局less变量测试</p>
    <van-button type="primary" text="测试定制主题按钮" />
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "TestVant",
  components: {
    [Button.name]: Button,
  },
};
</script>

<style lang="less" scoped>
p {
  color: @primary;
}
</style>
