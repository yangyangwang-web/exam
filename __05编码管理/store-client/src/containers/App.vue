<template>
  <Layout :isshow="isLogin">
    <router-view />
  </Layout>
</template>

<script>
import Layout from "@/components/layout";

export default {
  name: "App",
  components: {
    Layout
  },
  data() {
    return {
      isLogin: true
    };
  }
};
</script>

<style>
@import url("../assets/css/reset.css");
@import url("../assets/css/common.css");
@import url("../assets/css/style.css");
</style>
