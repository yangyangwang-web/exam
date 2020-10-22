<template>
  <div class="wraper">
    <Header :visible="HEADER_STATUS"></Header>
    <section class="content">
      <slot></slot>
    </section>
    <Footer :visible="HEADER_STATUS"></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import { mapState } from "vuex";
export default {
  name: "Layout",
  //方式一：
  // computed: {
  //   isShow() {
  //     return this.$store.state.app["HEADER_STATUS"];
  //   }
  // },
  // 方式二：
  // computed: mapState({
  //   //写法一：
  //   isShow: state => state.app["HEADER_STATUS"]
  //   //写法二：
  //   // isShow: state => {
  //   //   return state.app["HEADER_STATUS"];
  //   // },
  // }),
  // 方式三： 是方式二的写法变形，没有任何区别
  computed: {
    ...mapState({
      HEADER_STATUS: state => state.app["HEADER_STATUS"]
    })
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style></style>
