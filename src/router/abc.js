/*
 * @Author: HuiMinQi
 * @Date: 2022-07-27 17:38:41
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-07-27 17:38:46
 * @Description: abc左侧菜单路由
 */

export default [
  {
    path: "/aaa",
    name: "AAA",
    component: () => import("../components/ABC/AAA/index.vue")
  },
  {
    path: "/bbb",
    name: "BBB",
    component: () => import("../components/ABC/BBB/index.vue")
  }
];
