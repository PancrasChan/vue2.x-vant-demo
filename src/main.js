import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/icons";
// vant组件定制主题
import "vant/lib/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
