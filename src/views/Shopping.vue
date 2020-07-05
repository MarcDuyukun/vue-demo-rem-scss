<template>
<div class="shopping">
    <NavBar :isShowBack=false   pageName="购物车" ></NavBar>
    <div class="shopping-content">
      <div class="shopping-content-list">
        <div class="shopping-content-list-item" v-for="(item,index) in shoppingDatas" :key="index">
              <img :src="checkImg(item.isCheck)" alt="no" class="shopping-content-list-item-check"
               @click="onGoodsCheckClick(item)">
              <img class="shopping-content-list-item-img" :src="item.img" alt="img">
              <div class="shopping-content-list-item-desc">
                <p class="shopping-content-list-item-desc-name text-line-2">
                      <Direct v-if='item.isDirect'></Direct>
                      {{item.name}}

                </p>
                <div class="shopping-content-list-item-desc-data">
                  <p class="shopping-content-list-item-desc-data-price">¥{{item.price | priceValue}}</p>

                   <!-- //数量控制器 -->
                   <NumberControl :defaultNumber="item.number" @onChangeNumber='onChangeNumber(arguments,item,index)'></NumberControl>
                </div>
              </div>
        </div>

      </div>
              <div class="shopping-content-total">
          <div class="shopping-content-total-check">
             <img :src="checkImg(totalData.isAll)" alt="no" @click="onAllCheckClick" >
             <p>全选</p>
          </div>
          <div class="shopping-content-total-price">
            <p class="shopping-content-total-price-total">合计：<span>¥{{totalData.totalPrice | priceValue}}</span></p>
            <p class="shopping-content-total-price-all">合计：<span>¥{{totalData.totalPrice | priceValue}}</span>
               &nbsp;&nbsp;
                立减<span>¥0.00</span>
            </p>
          </div>
          <div class="shopping-content-total-commit">
            去结算({{totalData.goodsNumber}})
          </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@c/NavBar.vue'
import Direct from '@c/Direct.vue'
import NumberControl from '@c/NumberControl.vue'
export default {
  name: 'shopping',
  components: { NavBar, Direct, NumberControl },
  data () {
    return {
      shoppingDatas: [],
      totalData: {
        isAll: false,
        totalPrice: 0,
        goodsNumber: 0
      }
    }
  },
  created () {
    this.shoppingDatas = this.$store.state.shoppingDatas
  },
  methods: {
    onChangeNumber ($arguments, item, index) {
      const number = $arguments[0]
      this.$store.commit('changeShoppingDataNumber', {
        index: index,
        number: number
      })
      if (item.isCheck) {
        this.computeGoodsTotal()
      }
    },
    onGoodsCheckClick (item) {
      item.isCheck = !item.isCheck
      this.computeGoodsTotal()
    },
    onAllCheckClick () {
      console.log(this.shoppingDatas)
      this.totalData.isAll = !this.totalData.isAll
      this.shoppingDatas.forEach(item => { item.isCheck = this.totalData.isAll })
      this.computeGoodsTotal()
    },
    checkImg (isCheck) {
      return isCheck ? require('@imgs/check.svg') : require('@imgs/no-check.svg')
    },
    computeGoodsTotal () {
      this.totalData = {
        isAll: true,
        totalPrice: 0,
        goodsNumber: 0
      }
      this.shoppingDatas.forEach(item => {
        if (item.isCheck) {
          this.totalData.totalPrice += parseFloat(item.price) * parseInt(item.number)
          this.totalData.goodsNumber += parseInt(item.number)
        } else {
          this.totalData.isAll = false
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.shopping{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    &-content{
      background-color: $bgColor;
      border-top: px2rem(1) solid $lineColor;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      &-list{
        height: 100%;
        overflow: hidden;
        overflow-y: auto;
        &-item{
          background-color: #fff;
          padding: $marginSize;
          display: flex;
          border-bottom: px2rem(1) solid $lineColor;
          &-check{
            width: $checkSize;
            height: $checkSize;
            align-self: center;
            padding: px2rem(6);
          }
          &-img{
            width: $listGoodsImgSize;
            height: $listGoodsImgSize;
          }
          &-desc{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 $marginSize;
            &-name{
              font-size: $infoSize;
              line-height: px2rem(18);
            }
            &-data{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: $marginSize;
              &-price{
                font-size: $titleSize;
                color:$mainColor;
                font-weight: 500;
              }
            }
          }
        }
      }
      &-total{
        height: px2rem(56);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        background-color: #fff;
        border-top: px2rem(1) solid $lineColor;
        &-check{
          display: flex;
          align-items: center;
          margin-left: $marginSize;
          margin-right: $marginSize;
          img{
            width: $checkSize;
            height: $checkSize;
            padding: px2rem(6);

          }
          p{
            font-size: $infoSize;
          }
        }
        &-price{
          flex-grow: 2;
          display: flex;
          flex-direction: column;
          &-total{
            font-size: $titleSize;
            margin-bottom: px2rem(6);
            span{
              font-weight: bold;
            }
          }
          &-all{
            font-size: $minInfoSize;
            span{
              font-weight: bold;
            }
          }
        }
        &-commit{
          width: px2rem(120);
          height: 100%;
          font-size: $titleSize;
          background-color: $mainColor;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;

        }
      }
    }
}
</style>
