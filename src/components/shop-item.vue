<!-- 商家列表 组件 -->
<template>
  <div class="shop-item" @click="toShopDetail">
    <div class="left">
      <img v-lazy="'http://p0.meituan.net/xianfu/4c9e0d4356522fa1e50effd10d4f663f49152.jpg'">
    </div>

    <div class="right">
      <div class="name">{{ data.Name }}</div>

      <div class="mid clearfix">
        <!--<star class="fl" :size="24" :score="3"></star>-->
        <span class="count fl">月售{{ data.OrderNumber }}</span>
        <span class="distance fr">{{ 23 }}km</span>
        <span class="time fr">{{ data.PSWhenLong }}分钟</span>
      </div>

      <div class="fee">
        <span class="start">起送 ¥{{ data.QSPrice }}</span>
        <span class="deliver">配送 ¥{{ data.PSPrice }}</span>
        <span class="average">人均 ¥{{ data.QSPrice }}</span>
      </div>
      <div class="activity" v-for="sup in data.ManJian" :key="sup.ManJianCode">
        <p><img :src="'http://p0.meituan.net/xianfu/51639e2e7a51c71d967acc44a060e3092048.png'">{{sup.ManJianName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/star.vue'

export default {
  components: {
    Star
  },
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {},
  methods: {
    toShopDetail () {
      this.$router.push({path: '/shopdetail'})
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

  .shop-item {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    overflow: hidden;
    @include onepx('bottom')
    &:last-child {
      &:after {
        border-top: 0;
      }
    }
    .left {
      flex: 0 0 90px;
      width: 90px;
      img {
        display: block;
        width: 70px;
        margin: 0 auto;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-right: 15px;
      overflow: hidden;
      .name {
        font-size: 17px;
        color: #333;
        overflow: hidden;
        font-weight: bold;
        margin-right: 15px;
        overflow: hidden;
        @include ellipsis(1);
      }
      .mid {
        flex: 1;
        font-size: 12px;
        color: #666;
        margin-top: 7px;
        .star {}
        .count {
          margin-left: 10px;
        }
        .distance {
          margin-left: 5px;
          margin-top: 2px;
        }
        .time {
          @include right-bar();
        }
      }
      .fee {
        flex: 1;
        font-size: 13px;
        margin-top: 7px;
        span {
          display: inline-block;
          color: #656565;
        }
        .start {
          @include right-bar();
        }
        .deliver {
          @include right-bar();
        }
        .average {}
      }
      .activity {
        flex: 1;
        font-size: 13px;
        color: #b0b0b0;
        margin-top: 7px;
        p {
          @include ellipsis(1)
        }
        img {
          width: 16px;
          height: 16px;
          margin-right: 5px;
          vertical-align: top;
        }
      }
    }
  }
</style>
