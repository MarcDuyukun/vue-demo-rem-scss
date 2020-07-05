<!--  -->
<template>
  <div class="home" @scroll='onScrollChange' ref="home">
    <NavBar :isShowBack="false" :navBarStyle='navBarStyle'>
      <template v-slot:slot-left>
        <img :src="navBarCurrentStyle.leftIcon" alt="more" />
      </template>
      <template v-slot:slot-center>
        <Search :bgColor="navBarCurrentStyle.search.bgColor" :hintColor="navBarCurrentStyle.search.hintColor" :icon="navBarCurrentStyle.search.icon"></Search>
      </template>
      <template v-slot:slot-right>
        <img :src="navBarCurrentStyle.rightIcon" alt="message" />
      </template>
    </NavBar>
    <div class="home-content">
      <SwiperArea :swiperImgs="swiperImgs" :height="swiperHeight" />
      <Activity>
        <div class="activity-520">
          <img v-for="(item,index) in activityDatas" :key="index" :src="item" :alt="index" />
        </div>
      </Activity>
      <ModeOptions />
      <Seconds :dataSource="secondsDatas" />
      <!-- //拼购节 -->
      <Activity>
        <div class="activity-pin-gou-jie">
          <img src="@imgs/pinGouJie.gif" alt="1" />
        </div>
      </Activity>
      <Goods layoutType=3 :isScroll='false' />
    </div>
  </div>
</template>

<script>
import SwiperArea from '@c/SwiperArea.vue'
import Activity from '@c/Activity.vue'
import ModeOptions from '@c/ModeOptions.vue'
import Seconds from '@c/Seconds.vue'
import Goods from '@c/Goods.vue'
import NavBar from '@c/NavBar.vue'
import Search from '@c/Search.vue'
export default {
  name: 'home',
  components: {
    SwiperArea,
    Activity,
    ModeOptions,
    Seconds,
    Goods,
    NavBar,
    Search
  },
  data () {
    return {
      swiperImgs: [
        require('@imgs/swiper-1.jpg'),
        require('@imgs/swiper-2.jpg'),
        require('@imgs/swiper-3.jpg'),
        require('@imgs/swiper-4.jpg'),
        require('@imgs/swiper-5.jpg'),
        require('@imgs/swiper-6.jpg'),
        require('@imgs/swiper-7.jpg'),
        require('@imgs/swiper-8.jpg')
      ],
      swiperHeight: '184px',
      activityDatas: [
        require('@imgs/520-1.gif'),
        require('@imgs/520-2.gif'),
        require('@imgs/520-3.gif')
      ],
      secondsDatas: [
        {
          id: '1',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-1.jpg',
          price: '119',
          oldPrice: '169'
        },
        {
          id: '2',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-2.jpg',
          price: '1191',
          oldPrice: '1900'
        },
        {
          id: '3',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-3.jpg',
          price: '199',
          oldPrice: '289'
        },
        {
          id: '4',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-4.jpg',
          price: '79',
          oldPrice: '108'
        },
        {
          id: '5',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-5.jpg',
          price: '588',
          oldPrice: '1950'
        },
        {
          id: '6',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-6.jpg',
          price: '99.9',
          oldPrice: '316'
        },
        {
          id: '7',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-7.jpg',
          price: '239',
          oldPrice: '278'
        },
        {
          id: '8',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-8.jpg',
          price: '1499',
          oldPrice: '2199'
        },
        {
          id: '9',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-9.jpg',
          price: '2069',
          oldPrice: '4299'
        },
        {
          id: '10',
          icon: 'http://imooc.res.lgdsunday.club/jingDongMiaoSha-10.jpg',
          price: '138.5',
          oldPrice: '245'
        }
      ],
      navBarSlotStyle: {
      // 默认样式
        normal: {
          leftIcon: require('@imgs/more-white.svg'),
          search: {
            baColor: '#fff',
            hintColor: '#999',
            icon: require('@imgs/search.svg')
          },
          rightIcon: require('@imgs/message-white.svg')
        },
        // 滑动后样式
        highlight: {
          leftIcon: require('@imgs/more.svg'),
          search: {
            bgColor: '#d7d7d7',
            hintColor: '#fff',
            icon: require('@imgs/search-white.svg')
          },
          rightIcon: require('@imgs/message.svg')
        }
      },
      navBarCurrentStyle: {

      },
      navBarStyle: {
        position: 'fixed',
        backgroundColor: ''
      },
      scrollTop: -1,
      ANCHOR_SCROLL_TOP: 160
    }
  },
  created () {
    this.initData()
    this.navBarCurrentStyle = this.navBarSlotStyle.normal
  },
  // 在keep-alive激活时候才调用
  activated () {
    this.$refs.home.scrollTop = this.scrollTop
  },
  methods: {
    onScrollChange (event) {
      this.scrollTop = event.target.scrollTop
      const opacity = this.scrollTop / this.ANCHOR_SCROLL_TOP
      if (opacity >= 1) {
        this.navBarCurrentStyle = this.navBarSlotStyle.highlight
      } else {
        this.navBarCurrentStyle = this.navBarSlotStyle.normal
      }
      this.navBarStyle.backgroundColor = 'rgba(255,255,255,' + opacity + ')'
    },
    initData () {
      // swiper
      // this.$http
      //   .get('/swiper')
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // // activity
      // this.$http
      //   .get('/activity')
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // 同时发送多个请求
      // this.$http
      //   .all([
      //     this.$http.get('/swiper'),
      //     this.$http.get('/activity'),
      //     this.$http.get('/seconds')
      //   ])
      //   .then(
      //     this.$http.spread((swiperData, activityData, secondsData) => {
      //       // res是包含duo个请求值得数组
      //       // console.log(res);
      //       this.secondsDatas = secondsData.data
      //     })
      //   )
    }
  }
}
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: $bgColor;
  overflow: hidden;
  overflow-y: auto;
  &-content {
    height: 100%;
    .activity-520 {
      margin-top: px2rem(-8);
      border-top-left-radius: px2rem(8);
      border-top-right-radius: px2rem(8);
      img {
        display: inline-block;
        width: 33.33%;
      }
    }
    .activity-pin-gou-jie {
      background-color: #fff;
      margin-top: $marginSize;
      img {
        width: 100%;
      }
    }
  }
}
</style>
