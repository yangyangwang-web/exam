<template>
  <footer class="footer" v-if="visible">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/home">shouye</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/type">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      active: 0
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
.footer ul {
  display: flex;
}
.footer ul li {
  flex: 1;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
