<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-27 16:45:24
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-07-27 17:48:03
 * @Description: 首页
-->
<template>
  <el-container>
    <el-aside width="160px">
      <Aside />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import Aside from "../components/Home/Aside.vue";
export default {
  name: "Home",
  props: {},
  components: {
    Aside
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
  // .el-main {
  // border: 10px solid pink;
  // }
}
</style>
