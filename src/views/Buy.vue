<template>
<div class="buy-page">
    <NavBar pageName="立即购买" @onLeftClick='onBackClick'></NavBar>
    <div class="buy-page-content">
        <div class="buy-page-content-goods">
            <img class="buy-page-content-goods-img" :src="goodsData.img" alt="img">
            <div class="buy-page-content-goods-desc">
                <p class="buy-page-content-goods-desc-name">{{goodsData.name}}</p>
                <p class="buy-page-content-goods-desc-price">¥{{goodsData.price | priceValue}}</p>
            </div>
        </div>
        <ul class="buy-page-content-list">
            <li class="buy-page-content-list-item" v-for="(item,index) in paymentDatas" :key="index" @click="onPaymentClick(item)">
                     <img class="buy-page-content-list-item-icon" :src="item.icon" alt="icon">
                     <div class="buy-page-content-list-item-desc">
                            <p class="buy-page-content-list-item-desc-name">{{item.name}}</p>
                            <p class="buy-page-content-list-item-desc-desc">{{item.desc}}</p>
                     </div>
                     <img :src="getCheckIcon(selectPayment.id === item.id)" alt="" class="buy-page-content-list-item-check">
            </li>
        </ul>
    </div>
    <!-- 立即购买 -->
    <div class="pay page-commit">
        立即购买
    </div>
</div>
</template>

<script>
import NavBar from '@c/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      goodsData: {
        id: '0',
        img: 'http://imooc.res.lgdsunday.club/goods-1.jpg',
        name: '【二手95新】劳力士 日志型系列 奢侈品18K白金男腕表 自动机械男士手表 116264 白色表盘',
        price: '38000',
        volume: '143',
        isHave: true,
        isDirect: false,
        swiperImgs: [
          'http://imooc.res.lgdsunday.club/goods-swiper-1-1.webp.jpg',
          'http://imooc.res.lgdsunday.club/goods-swiper-1-2.webp.jpg',
          'http://imooc.res.lgdsunday.club/goods-swiper-1-3.webp.jpg',
          'http://imooc.res.lgdsunday.club/goods-swiper-1-4.webp.jpg'
        ],
        detailImgs: [
          'http://imooc.res.lgdsunday.club/goods-detail-1-1.jpg',
          'http://imooc.res.lgdsunday.club/goods-detail-1-2.jpg',
          'http://imooc.res.lgdsunday.club/goods-detail-1-3.jpg',
          'http://imooc.res.lgdsunday.club/goods-detail-1-4.jpg',
          'http://imooc.res.lgdsunday.club/goods-detail-1-5.jpg',
          'http://imooc.res.lgdsunday.club/goods-detail-1-6.jpg'
        ]
      },
      //    支付方式数据源
      paymentDatas: [
        {
          id: '1',
          name: '支付宝支付',
          desc: '安全可信托 数亿用户都在用',
          icon: require('@imgs/alipay.svg')
        },
        {
          id: '2',
          name: '微信支付',
          desc: '大家都在用 还有红包哦',
          icon: require('@imgs/weichat.png')
        }
      ],
      selectPayment: {}
    }
  },
  created () {
    this.selectPayment = this.paymentDatas[0]
  },
  methods: {
    loadGoodsData: function () {
      this.$http.get('/goodsDetail', {
        params: {
          goodsId: this.$route.query.goodsId
        }
      }).then(data => {
        this.goodsData = data.goodsData
      })
    },
    onBackClick () {
      this.$router.go(-1)
    },
    onPaymentClick (item) {
      this.selectPayment = item
    },
    getCheckIcon (isCheck) {
      return isCheck ? require('@imgs/check.svg') : require('@imgs/no-check.svg')
    }
  }
}
</script>
<style lang='scss' scoped>
.buy-page{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $bgColor;
    &-content{
        overflow: hidden;
        height: 100%;
        &-goods{
            background-color: #fff;
            padding: $marginSize;
            display: flex;
            border-bottom: px2rem(1) solid $lineColor;
            border-top: px2rem(1) solid $lineColor;
            margin-top: $marginSize;
            &-img{
                width:px2rem(100);
                height:px2rem(100)
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
                &-price{
                    font-size: $titleSize;
                    color: $mainColor;
                    font-weight: 500;
                }
            }
        }
        &-list{
            margin-top: $marginSize;
            &-item{
                display: flex;
                background-color: #fff;
                border-bottom: px2rem(1) solid $lineColor;
                padding: $marginSize;
                align-items: center;
                &-icon{
                    height: px2rem(30);
                }
                &-desc{
                    margin-left: px2rem(12);
                    flex-grow: 1;
                    &-name{
                        font-size: $infoSize;
                    }
                    &-desc{
                        font-size: $minInfoSize;
                        margin-top: px2rem(6);
                        color: $hintColor;
                    }
                }
                        &-check{
                            width: px2rem(16);
                            height: px2rem(16);
                        }
            }
        }
    }
    .pay{
        position: absolute;
        bottom: px2rem(52);
    }
}
</style>
