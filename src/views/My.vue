<!--  -->
<template>
  <div class="my">
      <NavBar :isShowBack=false  pageName='个人中心' ></NavBar>
      <div class="my-content" >
        <div class="my-content-header" @click="onLoginClick">
          <img class="my-content-header-avater" src="@imgs/avater.png" alt="">
          <p class="my-content-header-login">登录/注册</p>
        </div>
        <div class="my-content-tools">
            <div class="my-content-tools-item" v-for="(item,index) in toolsData" :key="index">
              <p class="my-content-tools-item-name">{{item}}</p>
              <img class="my-content-tools-item-arrow" src="@imgs/right-arrow.svg" alt="">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import NavBar from '@c/NavBar.vue'
export default {
  name: 'my',
  components: { NavBar },
  data () {
    return {
      toolsData: [
        '全部订单',
        '我的预约',
        '应用推荐',
        '用户福利'

      ]
    }
  },
  methods: {
    onLoginClick () {
      this.$router.push({
        name: 'login',
        params: {
          routerType: 'push'

        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.my{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    background-color:$bgColor;
    &-content{
      height: 100%;
      width: 100%;
      &-header{
        margin-top: $marginSize;
        background-color: #fff;
        height: px2rem(68);
        display: flex;
        align-items: center;
        border-top: px2rem(1) solid $lineColor;
        border-bottom: px2rem(1) solid $lineColor;
        padding: $marginSize;
        &-avater{
          width: px2rem(52);
          height: px2rem(52);
        }
        &-login{
          margin-left: $marginSize;
          font-size: $titleSize;
        }
      }
      &-tools{
        &-item{
          display: flex;
          height: px2rem(46);
          box-sizing: border-box;
          align-items: center;
          padding: $marginSize;
          background-color: #fff;
          border-bottom: px2rem(1) solid $lineColor;
          &-name{
            font-size: $infoSize;
            flex-grow: 1;
          }
          &-arrow{
            width: px2rem(16);
          }
        }
      }
    }
}
</style>
