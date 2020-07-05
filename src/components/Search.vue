<template>
  <div class="search" :style="{backgroundColor:bgColor}">
      <img class="search-icon" :src="icon" alt="icon">
      <span class="search-hint" :style="{color:hintColor}">请输入商品或店铺名称...</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      default: require('@imgs/search.svg'),
      type: String
    },
    hintColor: {
      type: String,
      default: '#888888'
    },
    bgColor: {
      type: String,
      default: '#fff'
    }

  },
  components: {},
  data () {
    return {

    }
  }
}
</script>
<style lang='scss' scoped>
.search{
    background-color: #fff;
    width: 100%;
    margin: px2rem(6);
    border-radius: px2rem(22);
    display: flex;
    align-items: center;
    &-icon{
        margin-left: $marginSize;
        width: px2rem(16);
    }
    &-hint{
        margin-left: $marginSize;
        font-size: $minInfoSize;
        color: $hintColor;
    }
}
</style>
