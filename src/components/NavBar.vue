<template>
   <div class="nav-bar z-index-max" :style="navBarStyle" :class="{'bottom-line':pageName}">
      <div class="left" @click="$emit('onLeftClick')">
          <img v-if="isShowBack" src="@imgs/back.svg" alt="back">
          <!-- 具名插槽 -->
          <slot name="slot-left"></slot>
      </div>
      <div class="center">
          <span class="page-title" v-if="pageName">{{pageName}}</span>
          <slot name="slot-center"></slot>
      </div>
      <div class="right">
          <slot name="slot-right"></slot>
      </div>
   </div>
</template>

<script>
export default {
  components: {},
  props: {
    pageName: {
      type: String,
      default: ''
    },
    isShowBack: {
      type: Boolean,
      default: true
    },
    navBarStyle: {
      type: Object,
      default: function () {
        return {
          backgroundColor: '#fff'

        }
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang='scss' scoped>
.nav-bar{
    width: 100%;
    height: px2rem(44);
    line-height: px2rem(44);
    display: flex;
    justify-content: space-between;
    .left,.right{
        display: flex;
        height: 100%;
        width: px2rem(26);
        padding: 0 $marginSize;
        img{
            width: 100%;
            align-self: center;
        }

    }
    .center{
        height: 100%;
        display: flex;
        flex-grow: 1;
        .page-title{
            font-size: $titleSize;
            align-self: center;
            margin: 0 auto;
        }
    }
}
.bottom-line{
    border-bottom: px2rem(1) solid $lineColor;
}
</style>
