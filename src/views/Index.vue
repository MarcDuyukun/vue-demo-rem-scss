<template>
  <div class="index">
    <component :is="currentComponent"></component>
    <ToolBar @onChangeItemBar='onChangeItemBar' />
  </div>
</template>

<script>
import ToolBar from '@c/ToolBar.vue'
export default {
  name: 'index',
  components: {
    ToolBar,
    // 异步组件引入方式 按需加载
    home: () => import('./Home.vue'),
    shopping: () => import('./Shopping.vue'),
    my: () => import('./My.vue')
  },

  data () {
    return {
      currentComponent: 'home'
    }
  },
  methods: {
    onChangeItemBar (name) {
      this.currentComponent = name
    }
  }
}
</script>
<style lang='scss' scoped>
.index{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
