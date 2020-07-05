<template>
  <div class="tool-bar">
    <!-- tabbar -->
    <div class="tool-bar-item" @click="onChangeItemBar(item,index)" v-for="(item,index) in toolBarData" :key="item.name">
      <img
        class="tool-bar-item-img"
        :src="[index === selectItemIndex ? item.hIcon:item.nIcon]"
        :alt="item.name"
      />
      <p
        class="tool-bar-item-name"
        :class="{'tool-bar-item-name-h':index === selectItemIndex }"
      >{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {},
  data () {
    return {
      // 底部导航栏数据
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
      ],
      selectItemIndex: 0
    }
  },
  methods: {
    onChangeItemBar (item, index) {
      this.selectItemIndex = index
      this.$emit('onChangeItemBar', item.componentName)
    },
    pushFragment (index) {
      this.onChangeItemBar(this.toolBarData[index], index)
    }
  }
}
</script>
<style lang='scss' scoped>
.tool-bar{
    width: 100%;
    height: px2rem(46);
    display: flex;
    justify-content: space-around;
    box-shadow: 0 0 px2rem(16) rgba(0,0,0,0.2);
    border-top: px2rem(1) solid $lineColor;
    &-item{
        text-align: center;
        padding: px2rem(4) px2rem(12);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-img{
            width: px2rem(22);
            height: px2rem(22);
        }
        &-name{
            font-size: $infoSize;
            margin-top: px2rem(4);
            &-h{
                color: $mainColor;
            }
        }
    }
}
</style>
