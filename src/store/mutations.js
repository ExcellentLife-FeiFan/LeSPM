/* eslint-disable no-unused-vars */
import * as Types from './mutation-types'
import {setStore, getStore} from '../config/CommonUtils'

export default {
  [Types.SAVE_ADDRESS] (state, {latitude,
    longitude}) {
    state.latitude = latitude
    state.longitude = longitude
  },
  [Types.INIT_BUYCART] (state) {
    let carts = getStore('buyCart')
    if (carts) {
      state.cartList = JSON.parse(carts)
    }
  },
  [Types.ADD_CART] (state, {
    shopid, categoryid, goodid, good
  }) {
    let cart = state.cartList
    let shop = cart[shopid] = (cart[shopid] || {})
    let category = shop[categoryid] = (shop[categoryid] || {})
    if (category[goodid]) {
      category[goodid]['num']++
    } else {
      category[goodid] = {
        'num': 1,
        'good': good
      }
    }
    state.cartList = {...cart}
    // 存入localStorage
    setStore('buyCart', state.cartList)
  },
  // 移出购物车
  [Types.REDUCE_CART] (state, {
    shopid,
    categoryid,
    goodid
  }) {
    let cart = state.cartList
    let shop = cart[shopid] = (cart[shopid] || {})
    let category = shop[categoryid] = (shop[categoryid] || {})
    if (category[goodid]) {
      category[goodid]['num']--
      // 存入localStorage
      setStore('buyCart', state.cartList)
    } else {
      category[goodid] = null
    }
  },
  // 清空当前商品的购物车信息
  [Types.CLEAR_CART] (state, shopid) {
    state.cartList[shopid] = null
    state.cartList = {...state.cartList}
    setStore('buyCart', state.cartList)
  }
}
