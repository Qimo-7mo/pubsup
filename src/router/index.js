/*
 * @Author: HuiMinQi
 * @Date: 2022-07-21 10:54:07
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-07-27 17:45:28
 * @Description: 请输入
 */
import Vue from "vue";
import Router from "vue-router";
import ABC from "./abc.js";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      redirect: {
        name: "AAA"
      },
      component: () => import("../views/Home.vue"),
      children: [...ABC]
    },
    {
      path: "/menu-items",
      name: "MenuItems",
      component: () => import("../components/MenuItems.vue")
    }
  ]
});
