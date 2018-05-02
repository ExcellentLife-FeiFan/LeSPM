<!-- 订单 -->

<template>
  <div class="order">
    <div v-for="item in orderData" :key="item.id">
      <order-item :data="item"></order-item>
    </div>
  </div>
</template>

<script>
import OrderItem from '@/page/order/order-item.vue'

export default {
  components: {
    OrderItem
  },
  data () {
    return {
      orderData: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    }
  },
  props: {},
  watch: {},
  methods: {
    // 初始化列表数据
    _initIndexListData () {
      // axios.get('/api/indexList').then(res => {
      //   // console.log(res)
      //   if (res.data.code === 0) {
      //     this.orderData = res.data.data.data.poilist
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  },
  filters: {},
  computed: {},
  created () {
    // 初始化列表数据
    this._initIndexListData()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .order {
    background-color: #ebebeb;
    margin-bottom: 70px;
  }
</style>
