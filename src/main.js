/*
 * @Author: HuiMinQi
 * @Date: 2022-07-21 10:54:07
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-08-17 14:33:27
 * @Description: 请输入
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import PubSub from "pubsub-js";

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 全局方法
Vue.prototype.$PubSub = PubSub;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
