<template>
  <van-tabbar
    :value="activeIndex"
    :active-color="activeColor"
    :inactive-color="inactiveColor"
    route
  >
    <van-tabbar-item
      v-for="(item, index) in tabBar"
      :key="index"
      :icon="item.icon"
      :to="item.to"
      >{{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tab-bar",
  props: {
    active: {
      type: Number,
      default: 0,
    },
    tabBar: {
      type: Array,
      default: () => {
        return [
          { icon: "wap-home", text: "首页", to: "/home/index" },
          { icon: "volume", text: "通知公告", to: "/home/notice" },
          { icon: "column", text: "测量记录", to: "/home/record" },
          { icon: "manager", text: "个人中心", to: "/home/userCenter" },
        ];
      },
    },
    activeColor: {
      type: String,
      default: "#07C160",
    },
    inactiveColor: {
      type: String,
      default: "#AAA",
    },
  },
  computed: {
    activeIndex: {
      get() {
        return this.active;
      },
      set(val) {
        console.log("tab-bar--activeIndex--set---->", val);
      },
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
