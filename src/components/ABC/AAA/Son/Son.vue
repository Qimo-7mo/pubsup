<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-29 15:43:39
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-08-17 14:48:10
 * @Description: 请输入
-->
<template>
  <div class="box">
    <el-button @click="addOne">加一岁</el-button>
    <div>儿子今年{{ age }}岁了。</div>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {},
  components: {},
  data() {
    return {
      age: 3
    };
  },
  mounted() {},
  methods: {
    addOne() {
      this.age++;
      console.log(this.age);
      this.$PubSub.publish("ADD_ONE_YEAR_OLD", this.age);
    }
  }
};
</script>

<style scoped lang="scss"></style>
