<!-- 商家详情 -->

<template>
  <div class="shop-detail">
    <!-- 商家模块头部 -->
    <seller-header :seller="seller"></seller-header>

    <div class="tab">
      <div class="tab-item">
        <router-link :to="{path:'/shopdetail/'+this.shopid+'/goods'}">点菜</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/shopdetail/'+this.shopid+'/ratings'}">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/shopdetail/'+this.shopid+'/seller'}">商家</router-link>
      </div>
    </div>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="seller" :seller="seller"></router-view>
      </keep-alive>
    </transition>
    <transition name="loading">
      <loading v-show="showLoading"></loading>
    </transition>
  </div>
</template>

<script>
import SellerHeader from '@/components/seller-header/seller-header'
import Loading from '@/components/loading.vue'
// import utils from '@/assets/js/utils.js'

export default {
  components: {
    SellerHeader, Loading
  },
  data () {
    return {
      shopid: null,
      showLoading: true,
      seller: null
    }
  },
  props: {},
  watch: {},
  methods: {
    // 初始化商家数据
    _initData () {
      this.shopid = this.$route.params.shopid
      this.getShopById()
    },
    getShopById () {
      this.$axios.get('/api/API_User/GetSupermarketInfo', {params: {SupermarketCode: this.shopid}}).then((res) => {
        console.log(res)
        this.showLoading = false
        this.seller = res.data.Obj // Object.assign({}, this.seller, res.data.Obj)
        this.$router.push({path: '/shopdetail/' + this.shopid + '/goods'})
      }).catch((err) => {
        console.log(err)
        this.showLoading = false
      })
    }
  },
  filters: {},
  computed: {},
  created () {
  },
  mounted () {
    // 初始化商家数据
    this._initData()
  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .shop-detail {
    .tab {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      @include onepx('bottom');
      .tab-item {
        flex: 1;
        background-color: #fff;
        a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.router-link-active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }

  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s
  }

  .loading-enter, .loading-leave-active {
    opacity: 0
  }
</style>
