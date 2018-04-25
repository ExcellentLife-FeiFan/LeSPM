/* eslint-disable no-new,import/first,import/no-duplicates,no-unused-vars */
import * as Con from './config/constants.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* MuseUI导入 */
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)

/* Vuetify UI导入 */
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify)
/* 全局样式导入 */
import '@/assets/scss/reset.scss'
import '@/assets/scss/iconfont.scss'
import '@/assets/ali-fonts/font_igfoz1eun4p9zfr/iconfont.css'
import '@/assets/scss/material-icons.css'

/* axios导入 */
import axios from 'axios'
const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
var axiosI = axios.create({
  baseURL: API_PROXY + Con.baseApiUrl,
  // baseURL: '/api',
  timeout: 5000
})
Vue.prototype.$axios = axiosI
Vue.config.productionTip = false

/* Mint UI导入 */
import Mint from 'mint-ui'
import {Lazyload} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(Lazyload)

/* 图片懒加载 */
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)
// // or with options
// Vue.use(VueLazyload, {
//   // preLoad: 1.3,
//   error: '/static/loading-bars.svg',
//   loading: '/static/loading-bars.svg'
//   // attempt: 1
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
