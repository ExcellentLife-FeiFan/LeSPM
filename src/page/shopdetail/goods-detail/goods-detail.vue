<!-- 商品详情页 -->

<template>
  <transition name="shift">
    <div class="goods-detail" v-show="pageShow" ref="goodsDetailRef">
      <!-- better-scroll -->
      <div>
        <!-- 商品图片 -->
        <div class="image-header">
          <img :src="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523535419643&di=1d04985007345b0367032bebe2daa05d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F472309f790529822c7567317ddca7bcb0b46d4f9.jpg'">
        </div>

        <!-- 标题信息 -->
        <div class="title-content">
          <div class="name">{{food.GoodsTitle}}</div>

          <div class="detail">
            <div class="count">月售{{food.SaleNumber}}份</div>
            <div class="rating">好评率{{80}}%</div>
          </div>

          <div class="price">
            <span class="now">￥{{food.XPrice}}</span>
            <span class="old" v-show="food.YPrice">￥{{food.YPrice}}</span>
          </div>

          <div class="control">
            <transition name="fade">
            <cart-control :food="food" :shopid="shopid" @drop="drop" v-show="foodNum>0"></cart-control>
            </transition>
          </div>

          <transition name="fade">
            <div class="buy" @click.stop.prevent="addFirst" v-show="foodNum===0">
              加入购物车
            </div>
          </transition>
        </div>

        <!-- 横线分隔条 -->
        <cross-line v-show="food.info"></cross-line>

        <!-- 商品介绍 -->
        <div class="introduce" v-show="food.info">
          <h1 class="title">商品介绍</h1>
          <div class="desc">{{food.info}}</div>
        </div>

        <!-- 横线分隔条 -->
        <cross-line></cross-line>

        <!-- 商品评价 -->
        <div class="ratings">
          <h1 class="title">商品评价</h1>

          <ratings-select :ratings="food.ratings"
                          :desc="desc"
                          :selectType="selectType"
                          :onlyContent="onlyContent"
                          @select="select"
                          @switchContent="switchContent"></ratings-select>

          <div class="ratings-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li class="ratings-item" v-for="rating in food.ratings" v-show="needShow(rating.rateType, rating.text)" :key="rating.id">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img :src="rating.avatar">
                </div>

                <div class="time">{{rating.rateTime | moment}}</div>

                <div class="text">
                  <i :class="{'icon-thumb_up':rating.rateType===0, 'icon-thumb_down':rating.rateType===1}"></i>
                  {{rating.text}}
                </div>
              </li>
            </ul>

            <!-- 无评价时的样式 -->
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>

      <!-- 返回按钮 -->
      <div class="back" @click="hide">
        <i class="icon-arrow_lift"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import CartControl from '@/components/cart-control/cart-control'
import CrossLine from '@/components/cross-line/cross-line'
import RatingsSelect from '@/components/ratings-select/ratings-select'
import moment from 'moment'
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'

const ALL = 2

export default {
  components: {
    CartControl,
    CrossLine,
    RatingsSelect
  },
  data () {
    return {
      // 该页是否显示
      pageShow: false,
      // ratings-select 界面组件文字
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      },
      // 默认选择所有评价
      selectType: ALL,
      // 只显示有内容的评价
      onlyContent: false
    }
  },
  props: {
    // 该页维护的商品
    food: {
      type: Object
    },
    shopid: null
  },
  watch: {},
  methods: {
    ...mapMutations([
      'ADD_CART'
    ]),
    show () {
      this.pageShow = true

      // 初始化 ratings-select 组件
      this.selectType = ALL
      this.onlyContent = false

      // 初始化 better-scroll
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.goodsDetailRef, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    hide () {
      this.pageShow = false
    },
    // 加入购物车
    addFirst (event) {
      if (!event._constructed) {
        return
      }
      this.ADD_CART({shopid: this.shopid, categoryid: this.food.GoodsTypeCode, goodid: this.food.GoodsCode, good: this.food})
      // 将当前 dom 传递出去，用来做小球飞入效果
      this.$emit('drop', event.target)
    },
    drop (target) {
      this.$emit('drop', target)
    },
    select (type) {
      this.selectType = type
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    switchContent () {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    // 只显示有内容的评价
    needShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }

      if (this.selectType === ALL) {
        return true
      } else {
        return type === this.selectType
      }
    }
  },
  filters: {
    // moment.js: 格式化时间戳
    // 1469261964000 -> 2016-07-23, 04:19:24
    moment (time) {
      return moment(time).format('YYYY-MM-DD, hh:mm')
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

.goods-detail {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  width: 100%;
  background-color: #fff;
  z-index: 30;
  transform: translate3d(0, 0, 0);
  background-color: #fff;
  overflow: hidden;
  &.shift-enter-active, &.shift-leave-active {
    transition: all 0.2s linear;
  }
  &.shift-enter, &.shift-leave-to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  // 商品图片
  .image-header {
    // 制作一个宽高相等的容器
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  // 标题信息
  .title-content {
    position: relative;
    padding: 18px;
    .name {
      line-height: 14px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }
    .detail {
      margin-bottom: 18px;
      line-height: 25px;
      height: 10px;
      font-size: 0;
      .count {
        display: inline-block;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
      .rating {
        display: inline-block;
        font-size: 10px;
        color: rgb(147, 153, 159);
        margin-left: 12px;
      }
    }
    .price {
      font-weight: 700;
      line-height: 24px;
      .now {
        margin-right: 8px;
        font-size: 14px;
        color: rgb(240, 20, 20);
      }
      .old {
        font-size: 10px;
        text-decoration: line-through;
        color: rgb(147, 153, 159);
      }
    }
    .control {
      position: absolute;
      right: 12px;
      bottom: 12px;
    }
    .buy {
      position: absolute;
      right: 18px;
      bottom: 28px;
      height: 24px;
      line-height: 24px;
      padding: 0 12px;
      box-sizing: border-box;
      font-size: 10px;
      border-radius: 12px;
      color: #333;
      background-color: #FFD161;
      z-index: 10;
      &.fade-enter-active, &.fade-leave-active {
        transition: all 0.4s linear;
      }
      &.fade-enter, &.fade-leave-to {
        opacity: 0;
      }
    }
  }
  // 商品介绍
  .introduce {
    padding: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 6px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .desc {
      padding: 0 8px;
      font-size: 12px;
      font-weight: 200;
      line-height: 24px;
      color: rgb(77, 85, 93);
    }
  }
  // 商品评价
  .ratings {
    padding-top: 18px;
    .title {
      line-height: 14px;
      margin-left: 18px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .ratings-wrapper {
      padding: 0 18px;
      .ratings-item {
        position: relative;
        padding: 16px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        .user {
          position: absolute;
          top: 16px;
          right: 0;
          line-height: 12px;
          .name {
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
            color: rgb(147, 153, 159);
            margin-right: 6px;
          }
          img {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
        .time {
          margin-bottom: 6px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: rgb(7, 17, 27);
          .icon-thumb_up {
            line-height: 24px;
            margin-right: 4px;
            font-size: 12px;
            color: rgb(0, 160, 220);
          }
          .icon-thumb_down {
            line-height: 24px;
            margin-right: 4px;
            font-size: 12px;
            color: rgb(147, 153,159);
          }
        }
      }
      .no-rating {
        padding: 16px 0;
        font-size: 12px;
        color: rgb(147, 153, 159);
      }
    }
  }
  // 返回按钮
  .back {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 40px;
    background-color: rgba(7, 17, 27, 0.5);
    border-radius: 50%;
    i {
      display: block;
      padding: 10px;
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>
