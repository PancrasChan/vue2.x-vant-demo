// 自动按需引入Vant组件
import { Cell, Button, NavBar, Tabbar, TabbarItem } from "vant";

let vantUIs = [Cell, Button, NavBar, Tabbar, TabbarItem];

export default {
  install(Vue) {
    vantUIs.forEach((vantUI) => {
      // 也可以使用Vue.component(vantUI.name, vantUI);
      // Vue.component(vantUI.name, vantUI);
      Vue.use(vantUI);
    });
  },
};
