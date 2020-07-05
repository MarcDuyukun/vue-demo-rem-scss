<template>
  <div class="goods-detail">
    <NavBar :isShowBack="false" :navBarStyle="navBarStyle">
      <template v-slot:slot-left>
        <div class="goods-detail-nav-left" @click="$router.go(-1)">
          <img src="@imgs/back-2.svg" alt="back2" :style="{opacity:leftImgOpacity}" />
          <img src="@imgs/back-white.svg" alt="backw" :style="{opacity:navBarSlotOpacity}" />
        </div>
      </template>
      <template v-slot:slot-center>
        <p class="goods-detail-nav-title" :style="{opacity:navBarSlotOpacity}">商品详情</p>
      </template>
    </NavBar>
    <div class="goods-detail-content" >
      <Parallax @onScrollChange="onScrollChange">
        <!-- 缓慢移动区域 -->
        <template v-slot:parallax-slow>
          <SwiperArea
            :height="SWIPER_IMG_HEIGHT+'px'"
            :swiperImgs="goodsData.swiperImgs"
            paginationTypes="2"
          ></SwiperArea>
        </template>
        <!-- 正常移动区域 -->
        <template>
          <div class="goods-detail-content-desc">
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-price">¥{{goodsData.price | priceValue }}</p>
              <p class="goods-detail-content-desc-item-name">
                <Direct v-if="goodsData.isDirect" />
                {{goodsData.name}}
              </p>
            </div>
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-select">
                已选
                <span class="single-row-text">{{goodsData.name}}</span>
              </p>
              <div class="goods-detail-content-desc-item--support">
                <ul class="goods-detail-content-desc-item-support-list">
                  <li
                    class="goods-detail-content-desc-item-support-list-item"
                    v-for="(item,index) in attachDatas"
                    :key="index"
                  >
                    <img src="@imgs/support.svg" alt="support" />
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
              <div class="goods-detail-content-desc-detail">
                <img
                  v-for="(item,index) in goodsData.detailImgs"
                  :key="index"
                  :src="item"
                  alt="itemimg"
                />
              </div>
            </div>
          </div>
        </template>
      </Parallax>

      <!-- 详情页内容 -->
    </div>
    <!-- //购物车 -->
    <div class="goods-detail-buy">
      <div class="goods-detail-buy-add"  @click="onAddGoods">加入购物车</div>
      <div class="goods-detail-buy-now" @click="onBuyClick">立即购买</div>
    </div>
  </div>
</template>

<script>
import NavBar from '@c/NavBar.vue'
import SwiperArea from '@c/SwiperArea.vue'
import Direct from '@c/Direct.vue'
import Parallax from '@c/Parallax.vue'
export default {
  name: 'goodsdetail',
  components: { NavBar, SwiperArea, Direct, Parallax },
  data () {
    return {
      // navBarStyle: {
      //   backgroundColor: '',
      //   position: 'fixed'
      // },
      SWIPER_IMG_HEIGHT: 364,
      // 锚点
      AN_SCROLL_TOP: 310,
      // 页面滑动值
      scrollValue: 0,
      goodsData: {},
      attachDatas: [
        '可配送海外',
        '直营发货',
        '京准达',
        '211限时达',
        '可自提',
        '不可使用优惠券'
      ]
    }
  },
  computed: {
    leftImgOpacity () {
      return 1 - this.scrollValue / this.AN_SCROLL_TOP
    },
    navBarStyle () {
      return {
        backgroundColor: 'rgba(216,30,6,' + this.navBarSlotOpacity + ')',
        position: 'fixed',
        top: 0
      }
    },
    navBarSlotOpacity () {
      return 1 - this.leftImgOpacity
    }
  },
  methods: {
    onScrollChange (scrollValue) {
      this.scrollValue = scrollValue
    },
    onBuyClick () {
      this.$router.push({
        name: 'buy',
        params: {
          routerType: 'push'

        },
        query: {
          goodsId: this.goodsData.id
        }
      })
    },
    onAddGoods () {
      alert('添加购物车成功!')
      this.$store.commit('addShoppingData', this.goodsData)
      this.$router.push({
        name: 'index',
        params: {
          routerType: 'push',
          componentIndex: 1,
          clearTask: true
        }
      })
    }
  },
  created () {
    this.goodsData = this.$route.params.goods
  }
}
</script>
<style lang='scss' scoped>
.goods-detail {
    position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  &-nav-left {
    width: 100%;
    display: flex;
    position: relative;

    img {
      align-self: center;
      position: absolute;
    }
  }
  &-nav-title {
    width: 100%;
    height: 100%;
    font-size: $titleSize;
    font-weight: bold;
    text-align: center;
    color: #fff;
  }
  &-content {
    // overflow: hidden;
    // overflow-y: auto;
    height: 100%;
    &-desc {
      width: 100%;
      background-color: $bgColor;
      box-shadow: 0 0 px2rem(17) 0 rgba(0, 0, 0, 0.2);
      &-item {
        background-color: #fff;
        padding: $marginSize;
        margin-bottom: $marginSize;
        &-price {
          font-size: px2rem(20);
          color: $mainColor;
          font-weight: 500;
        }
        &-name {
          margin-top: $marginSize;
          font-size: $titleSize;
          font-weight: 500;
          line-height: px2rem(20);
        }
        &-select {
          font-size: $infoSize;
          color: $hintColor;
          height: px2rem(44);
          display: flex;
          align-items: center;
          border-bottom: px2rem(1) solid $lineColor;
          span {
            color: $textColor;
            font-size: $titleSize;
            font-weight: bold;
            margin-left: px2rem(4);
          }
        }
        &-support {
          margin-top: $marginSize;
          &-list {
            display: flex;
            flex-wrap: wrap;
            &-item {
              display: flex;
              align-items: center;
              padding: px2rem(6) 0;
              margin-right: $marginSize;
              img {
                width: px2rem(12);
                margin-right: px2rem(4);
              }
              span {
                font-size: $minInfoSize;
                color: $hintColor;
              }
            }
          }
        }
      }
      &-detail {
        img {
          width: 100%;
        }
      }
    }
  }
  &-buy {
    background-color: #fff;
    border-top: px2rem(1) solid $lineColor;
    height: px2rem(46);
    line-height: px2rem(46);
    text-align: right;
    div {
      display: inline-block;
      width: px2rem(100);
      text-align: center;
      font-size: $infoSize;
      color: #fff;
    }
    &-add {
      background-color: $mainColor;
    }
    &-now {
      background-color: darkgoldenrod;
    }
  }
}
</style>
