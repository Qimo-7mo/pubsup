<!--
 * @Author: HuiMinQi
 * @Date: 2022-07-27 17:05:14
 * @LastEditors: HuiMinQi
 * @LastEditTime: 2022-07-27 17:57:13
 * @Description: 首页左侧导航
-->
<template>
  <div class="menu-items">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in menuList"
        :key="item.index"
        :index="item.index"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeAside",
  props: {},
  components: {},
  data() {
    return {
      menuList: [
        {
          index: "1",
          title: "aaa",
          routeName: "AAA"
        },
        {
          index: "2",
          title: "bbb",
          routeName: "BBB"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      let item = this.menuList.find(item => item.index === key);
      if (this.$route.name !== item.routeName) {
        this.$router.push({
          name: item.routeName
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.menu-items {
  height: 100%;
}
</style>
