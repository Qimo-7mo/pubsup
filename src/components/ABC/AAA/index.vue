<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-27 17:41:06
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-08-17 14:42:17
 * @Description: aaa
-->
<template>
  <div class="box">
    <Son :myFather="fatherAge" />
    <Who />
  </div>
</template>

<script>
import Son from "./Son/Son.vue";
import Who from "../BBB/index.vue";
export default {
  name: "AAA",
  props: {},
  components: {
    Son,
    Who
  },
  data() {
    return {
      fatherAge: "我是父组件，今年100岁",
      grandsonData: ""
    };
  },
  provide() {
    return {
      fatherMsg: this.fatherAge
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
