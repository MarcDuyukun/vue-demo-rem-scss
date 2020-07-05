<template>
  <div class="index">
    <component :is="currentComponent"></component>
    <ToolBar ref='toolBar' @onChangeItemBar='onChangeItemBar' />
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
  activated () {
  // 在keep-alive被激活时 调用指定加载页面的方法
    this.pushFragment()
  },
  methods: {
    onChangeItemBar (name) {
      this.currentComponent = name
    },
    pushFragment () {
      const componentIndex = this.$route.params.componentIndex
      if (!componentIndex) {
        return
      }
      this.$refs.toolBar.pushFragment(componentIndex)
    }
  }
}
</script>
<style lang='scss' scoped>
.index{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
