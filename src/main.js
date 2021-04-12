import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/icons";
import Vant from "@configs/vant";
// vant组件主题less样式文件
import "vant/lib/index.less";

Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
