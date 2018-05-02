<!-- 发现 -->

<template>
  <div class="find">
    <div v-for="item in findListData" :key="item.id">
      <find-item :data="item"></find-item>
    </div>
  </div>
</template>

<script>
import FindItem from '@/page/find/find-item.vue'

export default {
  components: {
    FindItem
  },
  data () {
    return {
      findListData: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    }
  },
  props: {},
  watch: {},
  methods: {
    _initFindListData () {
      // axios.get('/api/findList').then(res => {
      //   if (res.data.code === 0) {
      //     this.findListData = res.data.data.data
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
    }
  },
  filters: {},
  computed: {},
  created () {
    this._initFindListData()
  },
  mounted () {},
  destroyed () {}
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .find {
    background-color: #ebebeb;
    margin-bottom: 50px;
  }
</style>
