<template>
  <div class="main">
    <keep-alive>
      <router-view v-if="keepAlive" />
    </keep-alive>
    <router-view v-if="!keepAlive" />
    <zt-tab-bar />
  </div>
</template>

<script>
import TabBar from "@components/tab-bar/tab-bar";
export default {
  name: "home-view",
  components: {
    ZtTabBar: TabBar,
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    },
  },
};
</script>
