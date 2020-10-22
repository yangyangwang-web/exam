<template>
  <div>
    this is home page
    <van-swipe indicator-color="white" style="height: 200px;">
      <van-swipe-item v-for="carousel in carouselList" :key="carousel.id">
        <img
          class="carousel-img"
          :src="`http://localhost:7001/public/coursel/${carousel.c_img_url}`"
          :alt="carousel.c_img_title"
        />
      </van-swipe-item>
    </van-swipe>
    <keep-alive>
      <van-tabs v-model="active">
        <van-tab
          v-for="(tab, index) in productList"
          :key="index"
          :title="tab.good_type_text"
        >
          <van-card
            v-for="goods in tab.children"
            :key="goods.goods_id"
            :price="goods.goods_price"
            :title="goods.goods_title"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="footer">
              <van-button size="mini" @click="add2Cart(goods)"
                >加入购物车</van-button
              >
            </div>
          </van-card>
        </van-tab>
      </van-tabs>
    </keep-alive>
    <!-- <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list> -->
  </div>
</template>

<script>
import {
  GET_TITLE_LIST,
  GET_GOODS_LIST,
  GET_CAROUSEL_LIST,
  ADD_CART
} from "@/store/type";

import { mapState } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      productList: [],
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.$store.dispatch({ type: GET_TITLE_LIST });
    this.$store.dispatch({ type: GET_GOODS_LIST });

    this.$store.dispatch({ type: GET_CAROUSEL_LIST });
  },
  watch: {
    goodsList: function(newVal) {
      if (newVal.length > 0) {
        this.formate();
      }
    }
  },
  computed: {
    ...mapState({
      titleList: store => store.home.titleList,
      goodsList: store => store.home.goodsList,
      carouselList: store => store.home.carouselList,
      shopcarts: store => store.app.shopcarts
    })
  },
  methods: {
    add2Cart(product) {
      //判断商品是否在购物车
      const inCart = this.shopcarts.filter(
        goods => goods.goods_id === product.goods_id
      );
      if (inCart.length) {
        const shopcarts = this.shopcarts.map(goods => {
          //在购物车，数量++，并返回商品
          if (goods.goods_id === product.goods_id) {
            goods.count++;
          }
          return goods;
        });
        this.$store.commit({
          type: ADD_CART,
          payload: [...shopcarts]
        });
      } else {
        //添加的商品不在购物车中
        //将购物车商品添加 count,isCheck字段
        this.$store.commit({
          type: ADD_CART,
          payload: [
            ...this.shopcarts,
            {
              ...product,
              count: 1,
              isCheck: false
            }
          ]
        });
      }
    },
    formate() {
      const temp = [];
      if (this.goodsList.length && this.titleList.length) {
        this.titleList.forEach((title, index) => {
          let obj = {
            ...title,
            children: []
          };
          this.goodsList.map(goods => {
            if (goods.goods_type === title.goods_type) {
              obj.children.push(goods);
            }
          });
          temp.push(obj);
        });
        this.productList = temp;
      }
    }
  }
};
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
</style>
