<template>
  <div>
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

<style scoped></style>
