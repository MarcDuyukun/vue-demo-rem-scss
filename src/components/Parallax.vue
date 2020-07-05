<template>
  <div class="parallax" @scroll="onScrollChangeP">
    <div class="parallax-slow"  :style="{top:slowTop}">
      <slot name="parallax-slow"></slot>
    </div>
    <div class="parallax-content z-index-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      parallaxScrollTop: 0,
      SPEED_DIFF: 2
    }
  },
  methods: {
    onScrollChangeP (e) {
      this.parallaxScrollTop = e.target.scrollTop
      //   console.log(123)
      //   console.log(this.parallaxScrollTop)
      this.$emit('onScrollChange', this.parallaxScrollTop)
    }
  },
  computed: {
    slowTop () {
      return (
        this.parallaxScrollTop - (this.parallaxScrollTop / this.SPEED_DIFF)
      ) + 'px'
    }
  }
}
</script>
<style lang='scss' scoped>
.parallax {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  &-slow {
    width: 100%;
    position: relative;
  }
  &-content {
    width: 100%;
    position: relative;
  }
}
</style>
