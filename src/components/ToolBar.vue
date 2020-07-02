
<template>
<div class="tool-bar">
    <!-- tabbar -->
    <div class="tool-bar-item">

    </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      toolBarData: [
        {
          nIcon: require('@imgs/home-n.svg'),
          hIcon: require('@imgs/home-h.svg'),
          name: '首页',
          componentName: 'home'

        },
        {
          nIcon: require('@imgs/shopping-n.svg'),
          hIcon: require('@imgs/shopping-h.svg'),
          name: '购物车',
          componentName: 'shopping'

        },
        {
          nIcon: require('@imgs/my-n.svg'),
          hIcon: require('@imgs/my-h.svg'),
          name: '我的',
          componentName: 'my'

        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
