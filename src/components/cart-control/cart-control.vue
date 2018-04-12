<!-- 购物车控制 ( - num + ) 组件 -->

<template>
  <div class="cart-control">
    <transition name="move">
      <div class="decrease"
           @click.stop.prevent="decrease($event)"
           v-show="foodNum > 0">
        <i class="icon-remove_circle_outline"></i>
      </div>
    </transition>

    <div class="num" v-show="foodNum > 0">{{ foodNum }}</div>

    <div class="add" @click.stop.prevent="add($event)">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import {mapState, mapMutations} from 'vuex'

export default {
  components: {},
  data () {
    return {}
  },
  props: {
    // 操作哪个商品
    food: {
      type: Object
    },
    shopid: null
  },
  watch: {},
  methods: {
    ...mapMutations([
      'ADD_CART', 'REDUCE_CART', 'INIT_BUYCART'
    ]),
    decrease (event) {
      // 解决移动端响应两次点击事件的问题
      if (!event._constructed) {

      }
      if (this.foodNum > 0) {
        this.REDUCE_CART({shopid: this.shopid, categoryid: this.food.GoodsTypeCode, goodid: this.food.GoodsCode})
      }
      // if (this.food.count) {
      //   this.food.count--
      // }
    },
    add (event) {
      // 解决移动端响应两次点击事件的问题
      if (!event._constructed) {
        return
      }
      this.ADD_CART({shopid: this.shopid, categoryid: this.food.GoodsTypeCode, goodid: this.food.GoodsCode, good: this.food})
      // // 修改对象的一个不存在的属性时（this.food.count = 1），DOM 不会更新
      // // 需要使用 Vue.set()
      // if (!this.food.count) {
      //   // this.food.count = 1
      //   Vue.set(this.food, 'count', 1)
      // } else {
      //   this.food.count++
      // }

      // 将当前 dom 传递出去，用来做小球飞入效果
      this.$emit('drop', event.target)
    }
  },
  computed: {
    ...mapState([
      'cartList'
    ]),
    /**
     * 监听cartList变化，更新当前商铺的购物车信息shopCart，同时返回一个新的对象
     */
    shopCart: function () {
      return Object.assign({}, this.cartList[this.shopid])
    },
    // shopCart变化的时候重新计算当前商品的数量
    foodNum: function () {
      if (this.shopCart && this.shopCart[this.food.GoodsTypeCode] && this.shopCart[this.food.GoodsTypeCode][this.food.GoodsCode]) {
        return this.shopCart[this.food.GoodsTypeCode][this.food.GoodsCode]['num']
      } else {
        return 0
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.cart-control {
  font-size: 0;
  line-height: 24px;
  .decrease, .add {
    display: inline-block;
    padding: 4px;
    i {
      font-size: 24px;
      color: #15aed1;
      display: inline-block;
    }
  }
  .num {
    display: inline-block;
    padding: 4px;
    font-size: 16px;
    text-align: center;
    color: rgb(147, 153, 159);
    vertical-align: top;
  }
}

.move-enter-active, .move-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all .4s;
  i {
    transform: rotate(0);
    transition: all .4s;
  }
}
.move-enter, .move-leave-to {
  opacity: 0;
  transform: translate3d(24px, 0, 0);
  transition: all .4s;
  i {
    transform: rotate(360deg);
    transition: all .4s;
  }
}
</style>
