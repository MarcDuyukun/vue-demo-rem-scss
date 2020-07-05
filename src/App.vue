<template>
  <div id="app">
    <!-- 页面跳转动画 -->
    <transition :name="transitionName">
      <keep-alive :include="vituralTaskStack">
      <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: 'fold-left',
      vituralTaskStack: [
        'index'
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      const routerType = to.params.routerType
      if (routerType === 'push') {
        // 跳转
        this.vituralTaskStack.push(to.name)
        this.transitionName = 'fold-left'
      } else {
        //  、、后退
        this.vituralTaskStack.pop()
        this.transitionName = 'fold-right'
      }
      if (to.params.clearTask) {
        // console.log(111)
        this.vituralTaskStack = ['index']
      }
    }
  }
}
</script>
<style lang='scss' scoped>
#app {
  width: 100%;
  height: 100%;
  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: 0.5s;
  }
  //push页面 进入动画
  @keyframes fold-left-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: 0.5s;
  }
  //push页面原页面退出动画
  @keyframes fold-left-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: 0.5s;
  }
  //后退页面时即将展示页面动画
  @keyframes fold-right-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .fold-left-leave-active {
    animation-name: fold-right-out;
    animation-duration: 0.5s;
  }
  //后退页面时  后退页面展示页面动画
  @keyframes fold-right-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
