<!-- 顶部栏 组件 -->

<template>
  <div class="header-bar">
    <section class="left-part">
      <i v-if="leftRes" :class="leftRes" @click="leftImgClick"></i>
      <mt-button class="mt-button" @click="leftTxtClick" v-else-if="leftTxt">{{leftTxt}}</mt-button>
    </section>
    <section class="middle-part">
      <h1 v-if="title" @click="titleClick">{{title}}</h1>
    </section>
    <section class="right-part">
      <i v-if="rightRes" :class="rightRes" @click="rightImgClick"></i>
      <mt-button class="mt-button" @click="rightTxtClick" v-else-if="rightTxt">{{rightTxt}}</mt-button>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: null
    },
    leftTxt: {
      type: String,
      default: null
    },
    rightTxt: {
      type: String,
      default: null
    },
    leftRes: {
      type: String,
      default: null
    },
    rightRes: {
      type: String,
      default: null
    }
  },
  watch: {},
  methods: {
    back () {
      this.$emit('back')
    },
    leftTxtClick () {
      this.$emit('leftTxtClick')
    },
    leftImgClick () {
      this.$emit('leftImgClick')
    },
    titleClick () {
      this.$emit('titleClick')
    },
    rightTxtClick () {
      this.$emit('rightTxtClick')
    },
    rightImgClick () {
      this.$emit('rightImgClick')
    }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: $primary-color;
  text-align: center;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  z-index: 10;
  .left-part{
    display: inline-block;
    float: left;
  }
  .right-part{
    display: inline-block;
    float: right;
  }
  .middle-part{
    display: inline-block;
    h1 {
      line-height: 48px;
      font-size: 20px;
      color: $color-white;
      text-align: center;
      margin-left: -15px;
    }
  }
  .left-part, .right-part  {
    .mt-button{
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: $color-white;
    padding: 0px 10px 0px 10px;
    font-size: 15px;
    &::after {
      content: none;
    }
  }
    i{
      font-size: 20px;
      padding: 0px 10px 0px 10px;
      color: $color-white;
    }

  }
}
</style>
