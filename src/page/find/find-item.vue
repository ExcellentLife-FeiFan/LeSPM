<!-- 发现 项目 组件 -->

<template>
  <div class="find-item">
    <div class="top">
      <img v-lazy="'https://p1.meituan.net/gpa/b300b67b69b5d37e36e7527f10e12275218086.jpg%40720w_348h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'">
    </div>

    <div class="bottom">
      <div class="title">活动名称</div>
      <div class="writer">xxxxxx</div>
      <div class="view">xxxxx</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.find-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  color: #333;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  .top {
    width: 100%;
    height: 160px;
    overflow: hidden;
    img {
      width: 100%;
      height: 160px;
    }
  }
  .bottom {
    width: 100%;
    height: 100px;
    position: relative;
    margin-top: 10px;
    .title {
      font-size: 18px;
      font-weight: bold;
      @include ellipsis(2);
    }
    .writer {
      color: #999;
      font-size: 14px;
      margin-top: 10px;
    }
    .view {
      position: absolute;
      bottom: 0;
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
