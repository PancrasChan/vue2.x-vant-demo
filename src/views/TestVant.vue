<template>
  <div class="page">
    <van-nav-bar left-arrow left-text="返回" title="测试标题" />
    <van-cell title="姓名" value="张三" />
    <div class="container02">
      <p>{{ username }}</p>
      <van-button type="primary" text="测试定制主题按钮" />
    </div>
  </div>
</template>

<script>
import store from "@store";
import { mapGetters } from "vuex";
import { USER_LOGIN } from "@store/mutation-types";
export default {
  name: "TestVant",
  computed: {
    // ...mapState({
    //   username: (state) => state.user.userInfo.username,
    // }),
    ...mapGetters(["username"]),
  },
  created() {
    store.dispatch(USER_LOGIN).then((res) => {
      console.log("返回的结果是", res);
    });
  },
  methods: {},
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
