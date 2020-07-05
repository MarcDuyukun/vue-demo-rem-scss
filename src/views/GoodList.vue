<template>
  <div class="goods-list-page">
    <NavBar @onLeftClick="onBackClick" pageName="商品列表">
      <template v-slot:slot-right>
        <img :src="layoutType.icon" @click="onChangeLayout" alt="icon" />
      </template>
    </NavBar>
    <div class="goods-list-page-content">
      <GoodsOptions @optionsChange="onGoodsOptionsChange"></GoodsOptions>
      <Goods :layoutType="layoutType.type" :sort="sortType"></Goods>
    </div>
  </div>
</template>

<script>
import NavBar from '@c/NavBar.vue'
import GoodsOptions from '@c/GoodsOptions.vue'
import Goods from '@c/Goods.vue'
export default {
  name: 'goodslist',
  components: { NavBar, GoodsOptions, Goods },
  data () {
    return {
      layoutType: {},
      sortType: '1',
      layoutTypeDatas: [
        {
          type: '1',
          icon: require('@imgs/list-type.svg')
        },
        {
          type: '2',
          icon: require('@imgs/grid-type.svg')
        },
        {
          type: '3',
          icon: require('@imgs/waterfall-type.svg')
        }
      ]
    }
  },
  created () {
    this.layoutType = this.layoutTypeDatas[0]
  },
  methods: {
    onBackClick () {
      this.$router.go(-1)
    },
    onChangeLayout () {
      if (this.layoutType.type === '1') {
        this.layoutType = this.layoutTypeDatas[1]
      } else if (this.layoutType.type === '2') {
        this.layoutType = this.layoutTypeDatas[2]
      } else {
        this.layoutType = this.layoutTypeDatas[0]
      }
    },
    onGoodsOptionsChange (nval) {
      this.sortType = nval
    }
  }
}
</script>
<style lang='scss' scoped>
.goods-list-page {
    position: absolute;
  height: 100%;
  width: 100%;
  background-color: $bgColor;
  display: flex;
  flex-direction: column;
  &-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
