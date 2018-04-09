import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../page/index/index.vue')), 'index')
const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const find = r => require.ensure([], () => r(require('../page/find/find.vue')), 'find')
const order = r => require.ensure([], () => r(require('../page/order/order.vue')), 'order')
const mine = r => require.ensure([], () => r(require('../page/mine/mine.vue')), 'mine')
const shopdetail = r => require.ensure([], () => r(require('../page/shopdetail/shopdetail.vue')), 'shopdetail')
const goods = r => require.ensure([], () => r(require('../page/shopdetail/goods/goods.vue')), 'goods')
// const goodsDetail = r => require.ensure([], () => r(require('../page/shopdetail/goods-detail/goods-detail.vue')), 'goods-detail')
const ratings = r => require.ensure([], () => r(require('../page/shopdetail/ratings/ratings.vue')), 'ratings')
const seller = r => require.ensure([], () => r(require('../page/shopdetail/seller/seller.vue')), 'seller')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          component: home,
          meta: {keepAlive: true}
        },
        {
          path: 'find',
          component: find
        },
        {
          path: 'order',
          component: order,
          meta: {keepAlive: true}
        },
        {
          path: 'mine',
          component: mine
        }]
    },
    {
      name: 'shopdetail',
      path: '/shopdetail/:shopid/goods',
      component: shopdetail,
      children: [
        {
          path: '',
          redirect: 'goods',
          component: goods
        },
        {
          path: 'goods',
          component: goods
        },
        {
          path: 'ratings',
          component: ratings
        },
        {
          path: 'seller',
          component: seller
        }]
    }

  ]
})
