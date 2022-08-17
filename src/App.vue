<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-21 10:54:07
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-07-29 16:09:07
 * @Description: 请输入
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html {
  height: 100%;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
body {
  height: 100%;
  margin: 0;
}
.box {
  border: 1px solid red;
}
</style>
