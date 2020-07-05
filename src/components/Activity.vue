<template>
   <div class="activity">
       <slot></slot>
   </div>
</template>

<script>
export default {
  name: 'activity',
  components: {},
  data () {
    return {

    }
  }
}
</script>
<style lang='scss' scoped>
.activity{
    max-height: px2rem(160);
    position: relative;
    z-index: 2;
}
</style>
