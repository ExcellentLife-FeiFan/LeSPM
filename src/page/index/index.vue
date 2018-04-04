<template>
  <div class="index">

    <div id="main-contained">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>

    <v-bottom-nav absolute :value="true" :active.sync="bottomNavValue" color="white" class="bottom-nav">
      <v-btn flat color="blue" value="home" to="/index/home">
        <span>首页</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat color="blue" value="find" to="/index/find">
        <span>发现</span>
        <v-icon>remove_red_eye</v-icon>
      </v-btn>
      <v-btn flat color="blue" value="order" to="/index/order">
        <span>订单</span>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn flat color="blue" value="mine" to="/index/mine">
        <span>我的</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  data () {
    return {
      bottomNavValue: 'home'
    }
  },
  components: {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  /*@import '~@/assets/scss/const.scss';*/
  /*@import '~@/assets/scss/mixin.scss';*/
  .index{
    .main-contained{
      height: 100%;
      width: 100%;
    }
    .bottom-nav{
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }

  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s
  }

  .loading-enter, .loading-leave-active {
    opacity: 0
  }

  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
