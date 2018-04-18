<!-- 商家模块 点菜页面 -->

<template>
  <div>
    <!-- 左右联动 -->
    <div class="goods-contained">
      <!-- 左侧菜单 -->
      <div class="menu-wrapper" ref="menuRef">
        <ul>
          <li class="menu-item"
              v-for="(item, index) in goods"
              :class="{'current': currentIndex === index}"
              @click="selectMenu(index, $event)" :key="item.GoodsTypeCode">
            <span class="text">
              <span class="icon" v-show="-1 > 0" :class="classMap[1]"></span>
              {{ item.GoodsTypeName }}
            </span>
          </li>
        </ul>
      </div>

      <!-- 右侧食物列表 -->
      <div class="foods-wrapper" ref="foodsRef">
        <ul>
          <li class="foods-list foods-list-hook" v-for="item in goods" ref="foodList" :key="item.GoodsTypeCode">
            <h1 class="menu-title">{{ item.GoodsTypeName }}</h1>

            <ul>
              <li class="foods-item" v-for="good in item.Children" @click="toFoodDetail(good, $event)" :key="good.GoodsCode">
                <div class="icon">
                  <img v-lazy="'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114'">
                </div>

                <div class="content-m">
                  <h2 class="name">{{ good.GoodsTitle }}</h2>
                  <p class="desc">{{ good.Content }}</p>

                  <div class="extra">
                    <span class="count">月售{{ good.SaleNumber }}份</span>
                    <span class="rating">好评率{{ 100 }}%</span>
                  </div>

                  <div class="price">
                    <span class="now">￥{{ good.XPrice }}</span>
                    <span class="old" v-show="good.YPrice">￥{{ good.YPrice }}</span>

                    <div class="control fr">
                      <cart-control :food="good" :shopid="seller.SupermarketCode" @drop="drop"></cart-control>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- 购物车 -->
      <shopcart ref="shopcartRef"
                :deliveryPrice="seller.PSPrice"
                :shopid="seller.SupermarketCode"
                :minPrice="seller.QSPrice"></shopcart>
    </div>

    <!-- 商品详情页 -->
    <goods-detail @drop="drop" :food="selectedFood" :shopid="seller.SupermarketCode" ref="goodsDetailRef"></goods-detail>
  </div>
</template>

<script>
import Shopcart from '@/components/shopcart/shopcart'
import CartControl from '@/components/cart-control/cart-control'
import GoodsDetail from '@/page/shopdetail/goods-detail/goods-detail'
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'

export default {
  components: {
    Shopcart,
    CartControl,
    GoodsDetail
  },
  data () {
    return {
      // 商品数据
      goods: [],
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      // 右侧每一大项的高度区间
      // (10) [0, 1172, 1343, 1478, 1828, 2070, 2334, 2685, 3251, 4035]
      listHeight: [],
      // 计算当前滚动的 Y 值
      scrollY: 0,
      // 需要传入详情页的商品
      selectedFood: {}
    }
  },
  props: {
    // 全部数据
    seller: {
      type: Object
    }
  },
  watch: {},
  methods: {
    ...mapMutations([
      'INIT_BUYCART'
    ]),
    // 初始化数据
    _initData () {
      this.getGoods()
      this.INIT_BUYCART()
    },
    // 初始化 BScroll
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuRef, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsRef, {
        click: true,
        probeType: 3
      })

      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.floor(pos.y))
        // console.log(this.scrollY)
      })
    },
    // 计算右侧每一大项的高度
    _calcHeight () {
      let foodList = this.$refs.foodsRef.getElementsByClassName('foods-list-hook')
      let height = 0
      this.listHeight.push(height)

      for (let i = 0; i < foodList.length; i++) {
        height += foodList[i].clientHeight
        this.listHeight.push(height)
      }
      // (10) [0, 1172, 1343, 1478, 1828, 2070, 2334, 2685, 3251, 4035]
      // console.log(this.listHeight)
    },
    getGoods () {
      this.$axios.get('/API_User/GetGoodsBySupermarket', {params: {SupermarketCode: this.seller.SupermarketCode}}).then((res) => {
        console.log(res)
        this.goods = res.data.Obj
        // DOM 渲染完成才能进行计算
        setTimeout(() => {
          // 初始化 BScroll
          this._initScroll()
          // 计算右侧每一大项的高度
          this._calcHeight()
        }, 20)
      }).catch((err) => {
        console.log(err)
      })
    },
    // better-scroll 默认会阻止浏览器的原生 click 事件。
    // 当设置为 true，better-scroll 会派发一个 click 事件
    // 我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
    selectMenu (index, event) {
      // 防止pc端触发两次点击
      if (!event._constructed) {
        return
      }

      let foodList = this.$refs.foodsRef.getElementsByClassName('foods-list-hook')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 100)
    },
    drop (target) {
      // 性能优化，异步异步执行下落动画
      this.$nextTick(() => {
        this.$refs.shopcartRef.drop(target)
      })
    },
    // 点击进入商品详情页
    toFoodDetail (food, event) {
      // 防止pc端触发两次点击
      if (!event._constructed) {
        return
      }
      this.selectedFood = food
      this.$refs.goodsDetailRef.show()
    }
  },
  filters: {},
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let h1 = this.listHeight[i]
        let h2 = this.listHeight[i + 1]

        // 落到这个区间 或者 最后一个(无 h2)
        if ((this.scrollY >= h1 && this.scrollY < h2) || !h2) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let select = []
      // 之前一直错，可能是 this 指向问题，不用箭头函数
      this.goods.forEach((good) => {
        good.Children.forEach((food) => {
          if (food.count) {
            select.push(food)
          }
        })
      })
      return select
    }
  },
  created () {
    // 初始化数据
    this._initData()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .goods-contained {
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .menu-wrapper {
      /*height: fit-content;*/
      flex: 0 0 80px;
      width: 80px;
      background-color: #f3f5f7;
      .menu-item {
        display: table;
        width: 80px;
        height: 54px;
        line-height: 14px;
        padding: 0 12px;
        @include onepx('bottom', true);
        &.current {
          position: relative;
          margin-top: -1px;
          background-color: #fff;
          font-weight: 700;
          z-index: 10;
        }
        .text {
          font-size: 12px;
          display: table-cell;
          vertical-align: middle;
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            vertical-align: top;
            &.decrease {
              @include bg-image('./img/decrease_3');
            }
            &.discount {
              @include bg-image('./img/discount_3');
            }
            &.guarantee {
              @include bg-image('./img/guarantee_3');
            }
            &.invoice {
              @include bg-image('./img/invoice_3');
            }
            &.special {
              @include bg-image('./img/special_3');
            }
          }
        }
      }
    }
    .foods-wrapper {
      flex: 1;
      .foods-list {
        .menu-title {
          padding-left: 14px;
          height: 26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          font-size: 12px;
          color: rgb(147, 153, 159);
          background-color: #f3f5f7;
        }
        .foods-item {
          position: relative;
          display: flex;
          margin: 14px 6px 14px 14px;
          padding-bottom: 18px;
          @include onepx('bottom', true);
          .icon {
            flex: 0 0 57px;
            width: 57px;
            height: 57px;
            margin-right: 10px;
            img {
              width: 57px;
              height: 57px;
            }
          }
          .content-m {
            height: fit-content;
            flex: 1;
            .name {
              font-size: 14px;
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              color: rgb(7, 17, 27);
            }
            .desc {
              margin-bottom: 8px;
              line-height: 14px;
              font-size: 10px;
              color: rgb(147, 153, 159);
            }
            .extra {
              margin-bottom: 8px;
              line-height: 12px;
              font-size: 0;
              color: rgb(147, 153, 159);
              .count {
                font-size: 10px;
                margin-right: 12px;
              }
              .rating {
                font-size: 10px;
              }
            }
            .price {
              line-height: 24px;
              .now {
                font-weight: 700;
                margin-right: 2px;
                font-size: 14px;
                color: rgb(240, 20, 20);
              }
              .old {
                font-size: 10px;
                color: rgb(147, 153, 159);
                text-decoration: line-through;
              }
              .control {
                height: 24px;
              }
            }

          }
        }
      }
    }
  }
</style>
