<template>
<div class="mode-options">
    <div @click='onItemClick(item)' class="mode-options-item" v-for='(item,index) in dataSource' :key="index">
        <img :src="item.icon" :alt="item.title" class="mode-options-item-icon">
        <p class="mode-options-item-title">{{item.title}}</p>
    </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      dataSource: [
        {
          id: '1',
          icon: require('@imgs/jingDongChaoShi.png'),
          title: '京东超市'
        },
        {
          id: '2',
          icon: require('@imgs/haiTunQuanQiu.png'),
          title: '海屯全球'
        },
        {
          id: '3',
          icon: require('@imgs/jingDongFuShi.png'),
          title: '京东服饰'
        },
        {
          id: '4',
          icon: require('@imgs/jingDongShengXian.png'),
          title: '京东生鲜'
        },
        {
          id: '5',
          icon: require('@imgs/jingDongDaoJia.png'),
          title: '京东到家'
        },
        {
          id: '6',
          icon: require('@imgs/chongZhiJiaoFei.png'),
          title: '充值缴费'
        },
        {
          id: '7',
          icon: require('@imgs/jingDongPinGou.png'),
          title: '9.9元拼'
        },
        {
          id: '8',
          icon: require('@imgs/lingJuan.png'),
          title: '领劵'
        },
        {
          id: '9',
          icon: require('@imgs/zhuanQian.png'),
          title: '赚钱'
        },
        {
          id: '10',
          icon: require('@imgs/quanBu.png'),
          title: '全部'
        }
      ]
    }
  },
  methods: {
    onItemClick (item) {
      this.$router.push({
        name: 'goodslist',
        params: {
          routerType: 'push'
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.mode-options{
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding-bottom: px2rem(14);
    &-item{
        width: 20%;
        text-align: center;
        margin-top: px2rem(10);

       &-icon{
         width: px2rem(40);
         height: px2rem(40);
       }
       &-title{
          font-size: $minInfoSize;
          margin-top: px2rem(6);
       }
    }
}
</style>
