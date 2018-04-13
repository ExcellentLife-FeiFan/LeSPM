<template>
  <div class="mine">
    mine
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  data () {
    return {
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
  .mine{
    background-color: red;
    margin:0;
    padding:0;
    width: 100%;
  }

  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s
  }

  .loading-enter, .loading-leave-active {
    opacity: 0
  }
</style>
