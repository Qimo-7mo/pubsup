<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-27 17:41:06
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-08-17 14:52:32
 * @Description: BBB
-->
<template>
  <div>
    无名氏
    <div>某某人家儿子今年{{ son }}岁了。</div>
  </div>
</template>

<script>
let pubsubToken;
export default {
  name: "BBB",
  props: {},
  components: {},
  data() {
    return {
      son: 0
    };
  },
  mounted() {
    pubsubToken = this.$PubSub.subscribe("ADD_ONE_YEAR_OLD", (_, data) => {
      console.log("_", _, "data:", data);
      this.son = data;
    });
  },
  methods: {},
  beforeDestroy() {
    pubsubToken && this.$PubSub.unsubscribe(pubsubToken);
    pubsubToken = null;
  }
};
</script>

<style scoped lang="scss"></style>
