<template>
  <div class="p10">
    <div class="pt15 pb15">
      <van-checkbox v-model="checkAll" @click="checkAllItem">全选</van-checkbox>
    </div>
    <div v-for="goods in shopcarts" :key="goods.goods_id">
      <van-checkbox
        v-model="goods.isCheck"
        @click="checkItem(goods.goods_id)"
      ></van-checkbox>
      <van-card
        :price="goods.goods_price | numFilter"
        :title="goods.goods_title"
        desc="描述信息"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      >
        <div slot="bottom">
          <van-stepper
            v-model="goods.count"
            min="0"
            button-size="20px"
            @change="computed"
          />
        </div>
      </van-card>
      <van-submit-bar
        :price="summary"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      checkAll: false,
      total: 0,
      summary: 0
    };
  },
  mounted() {
    this.computed();
  },
  computed: mapState({
    shopcarts: store => store.app.shopcarts
  }),
  filters: {
    numFilter(value) {
      let realVal = "";
      if (value) {
        // 截取当前数据到小数点后两位
        realVal = parseFloat(value).toFixed(2);
      } else {
        realVal = "--";
      }
      return realVal;
    }
  },
  methods: {
    checkItem(id) {
      const checked = this.shopcarts.filter(goods => {
        if (goods.goods_id === id) {
          goods.isCheck = !goods.isCheck;
        }
        return goods.isCheck === true;
      });
      if (checked.length === this.shopcarts.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
      this.computed();
    },
    checkAllItem() {
      this.shopcarts.map(goods => {
        goods.isCheck = !this.checkAll;
      });
      this.computed();
    },
    isCheckAll() {
      this.checkAll = !this.checkAll;
    },
    onSubmit() {
      console.log(this.shopcarts);
    },
    computed() {
      let tot = 0;
      let sum = 0;
      this.shopcarts.forEach(goods => {
        if (goods.isCheck) {
          tot += goods.count;
          sum += goods.count * goods.goods_price * 100;
        }
      });
      this.total = tot;
      this.summary = sum;
    }
  }
};
</script>

<style></style>
