<!-- 我的 -->

<template>
  <div class="mine">
    <!-- 顶部头像和设置 -->
    <div class="top">
      <div class="info">
        <div class="avatar-wrapper">
          <img src="../../assets/imgs/ic_user.png">
        </div>

        <div class="name-wrapper" @click="login">
          <span class="name">登录</span>
          <span class="desc">个人信息 <i class="iconfont icon-arrowright"></i></span>
        </div>
      </div>

 <!--     <div class="operation">
        <i class="iconfont icon-huanfu"></i>
        <i class="iconfont icon-youjian"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>-->
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 重要的栏目 -->
    <div class="important">
      <cross-item name="我的收藏">
        <i class="iconfont icon-favorite"></i>
      </cross-item>

      <cross-item name="我的足迹">
        <i class="iconfont icon-wxbdingwei"></i>
      </cross-item>

      <cross-item name="收货地址">
        <i class="iconfont icon-iconfontyiqiyibiao"></i>
      </cross-item>

      <cross-item name="我的会员">
        <i class="iconfont icon-iconfontmingpian"></i>
      </cross-item>
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 次要的栏目 -->
    <div class="minor">
      <cross-item name="关于">
        <i class="iconfont icon-prompt"></i>
      </cross-item>

      <cross-item name="下载App">
        <i class="iconfont icon-download

"></i>
      </cross-item>
    </div>
  </div>
</template>

<script>
import CrossLine from '@/components/cross-line/cross-line'
import CrossItem from '@/components/cross-item/cross-item'

export default {
  components: {
    CrossLine,
    CrossItem
  },
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {
    login () {
      // this.$router.push({
      //   path: '/login'
      // })
    }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .mine {
    width: 100%;
    height: 100%;
    background-color: #ebebeb;
    .top {
      display: flex;
      position: relative;
      width: 100%;
      height: 120px;
      background-color: $primary-color;
      .info {
        flex: 2;
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        .avatar-wrapper {
          width: 70px;
          height: 70px;
          margin-left: 20px;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
        }
        .name-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 55px;
          margin-top: 10px;
          margin-left: 20px;
          .name {
            font-size: 16px;
            color: #fff;
            font-weight: bold;
          }
          .desc {
            font-size: 16px;
            color: #fcfefe;
            i {
              font-size: 18px;
            }
          }
        }
      }
      .operation {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        i {
          margin-top: 10px;
          margin-right: 15px;
          color: #fff;
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
    .important {
      width: 100%;
      background-color: #fff;
      .cross-item {
        i{
          color: $primary-color;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    .minor {
      width: 100%;
      background-color: #fff;
      .cross-item {
        i{
          color: $primary-color;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
</style>
