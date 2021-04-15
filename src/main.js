import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/icons";
import "@configs";
// vant组件主题less样式文件
import "vant/lib/index.less";
if(process.env.NODE_ENV === 'development'){
  require("./mock");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
