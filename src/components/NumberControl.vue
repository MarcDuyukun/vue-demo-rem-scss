<template>
    <div class="number-control">
        <span class="number-control-less" :class="{'number-control-disabled':number===1}" @click="onLessClick">-</span>
        <span class="number-control-number">{{defaultNumber}}</span>
        <span class="number-control-add" @click="onAddClick">+</span>
    </div>
</template>

<script>
export default {
  props: {
    defaultNumber: {
      type: Number,
      default: 1
    }
  },
  components: {},
  data () {
    return {
      number: 1
    }
  },
  watch: {
    defaultNumber (newVal) {
      this.number = newVal
    },
    number (newV) {
      this.$emit('onChangeNumber', newV)
    }
  },
  methods: {
    onLessClick () {
      if (this.number === 1) {
        return
      }
      this.number -= 1
    },
    onAddClick () {
      this.number += 1
    }
  }
}
</script>
<style lang='scss' scoped>
.number-control{
    display: flex;
    font-size: $infoSize;
    height: px2rem(20);
    line-height: px2rem(20);
    span{
        width: px2rem(30);
        text-align: center;
        display: inline-block;
        font-weight: 500;
    }
    &-number{
        background-color: $bgColor;
        padding: 0 px2rem(4);

    }
    &-disabled{
        color: $hintColor;
    }
}
</style>
