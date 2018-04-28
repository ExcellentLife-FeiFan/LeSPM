<template>
  <div class="home">
    <action-bar title="北京市后现代城" rightTxt="用户名" leftRes="iconfont icon-wxbsousuotuiguang" @titleClick="titleClick" @leftImgClick="leftImgClick" @rightTxtClick="rightTxtClick">
    </action-bar>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <div class="refresh-content">
        <!--首页轮播图-->
        <div class="banner">
          <mt-swipe :auto="3000" class="mt-swipe">
            <mt-swipe-item v-for="item in bannerData" :key="item.id">
              <img :src="item.src"/>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <v-space></v-space>

        <div class="near-shops">
          <title-bar txt="附近商家"></title-bar>
          <shop-item v-for="item in shoplist"
                     :key="item.SupermarketCode"
                     :data="item"></shop-item>
        </div>
        <transition name="loading">
          <loading v-show="showLoading"></loading>
        </transition>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {mapMutations, mapState, mapActions} from 'vuex'
import VSpace from '@/components/v-space.vue'
import ShopItem from '@/components/shop-item.vue'
import TitleBar from '@/components/title-bar.vue'
import Loading from '@/components/loading.vue'
import ActionBar from '@/components/action-bar.vue'

export default {
  components: {
    VSpace, ShopItem, TitleBar, Loading, ActionBar
  },
  data () {
    return {
      bottomNavValue: 'home',
      showLoading: true,
      topStatus: '',
      bannerData: [{
        id: '1',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523328511&di=bb6631fb34c61a50f78ff9f7e4055c67&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb17eca8065380cd708ae52d1aa44ad345982815e.jpg'
      }, {
        id: '2',
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522733793054&di=24a8926d478a3b073f3fc08579c7a548&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F140720%2F240470-140H00GK190.jpg'
      }],
      shoplist: []
    }
  },
  computed: mapState([
    'latitude', 'longitude'
  ]),
  methods: {
    bottomNavChange (val) {
      this.bottomNavValue = val
    },
    ...mapMutations(['SAVE_ADDRESS']),
    getNearList () {
      this.$axios.get('/API_User/GetSupermarkeyList', {params: {CityName: '北京'}}).then((res) => {
        console.log(res)
        this.showLoading = false
        this.shoplist = res.data.Obj
        this.cancelRefresh()
      }).catch((err) => {
        console.log(err)
        this.showLoading = false
        this.cancelRefresh()
      })
    },
    handleTopChange (status) {
      this.topStatus = status
    },
    loadTop () {
      this.getNearList()
    },
    cancelRefresh () {
      if (this.topStatus === 'loading') {
        this.$refs.loadmore.onTopLoaded()
      }
    },
    titleClick () {
      alert('titleClick')
    },
    leftImgClick () {
      alert('leftImgClick')
    },
    rightTxtClick () {
      alert('rightTxtClick')
    }
  },
  mounted () {
    this.getNearList()
  }
}
</script>

<style lang="scss" scoped>
  /*@import '~@/assets/scss/const.scss';*/
  /*@import '~@/assets/scss/mixin.scss';*/
  .home {
    height: 100%;
    .refresh-content{
      .banner {
        height: 170px;
        text-align: center;
        overflow: hidden;
        font-size: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .near-shops{
      }
    }
    .mint-loadmore-top{
      span {
        display: inline-block;
        transition: .2s linear;
        vertical-align: middle;
      }
    }
  }
  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s
  }

  .loading-enter, .loading-leave-active {
    opacity: 0
  }
</style>
