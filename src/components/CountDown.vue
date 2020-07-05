<template>
  <div class="count-down">
    <span class="count-down-end-time">{{endHours}}点场</span>
    <span class="count-down-surplus">{{surplus | filterTime}}</span>
  </div>
</template>

<script>
export default {
  props: {
    endHours: {
      type: Number,
      required: true,
      default: 0
    }
  },
  components: {},
  data () {
    return {
      surplus: '',
      diffSeconds: 0,
      interval: undefined
    }
  },
  methods: {
    computedSurplusTime () {
      if (this.interval) {
        clearInterval(this.interval)
      }
      const date = new Date()
      //   console.log(date)
      //   console.log(date.getHours())
      //   console.log(this.endHours)
      if (date.getHours() > this.endHours) {
        this.surplus = '活动已结束'
        return
      }
      if (date.getHours() === this.endHours) {
        this.surplus = '活动进行中'
        return
      }
      const diffHours = this.endHours - date.getHours() - 1
      const diffMinutes = 60 - date.getMinutes() - 1
      const diffSecond = 60 - date.getSeconds()
      this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSecond
      this.interval = setInterval(() => {
        this.diffSeconds -= 1
      }, 1000)
    }
  },
  created () {
    this.computedSurplusTime()
  },
  watch: {
    diffSeconds (val) {
      const hours = Math.floor(val / 3600)
      const minutes = Math.floor(val / 60) % 60
      const seconds = val % 60
      this.surplus = hours + ':' + minutes + ':' + seconds
      if (val === 0) {
        this.computedSurplusTime()
      }
    },
    endHours (hour) {
      this.computedSurplusTime()
    }
  }
}
</script>
<style lang='scss' scoped>
.count-down {
  display: inline-flex;
  font-size: $infoSize;
  margin-left: $marginSize;
  span {
    display: inline-flex;
    padding: px2rem(2) px2rem(4);
  }
  &-end-time {
    background-color: $mainColor;
    border-top-left-radius:px2rem(4);
    border-bottom-left-radius:px2rem(4);
    border: px2rem(1) solid $mainColor;
    color: #fff;
  }
  &-surplus{
      background-color: #fff;
    border-top-right-radius:px2rem(4);
    border-bottom-right-radius:px2rem(4);
    border: px2rem(1) solid $mainColor;
     color: $mainColor;
  }
}
</style>
