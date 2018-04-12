import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

const state = {
  latitude: '123124241.22',
  longitude: '31232354235.11',
  cartList: {} // 加入购物车的商品列表
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
