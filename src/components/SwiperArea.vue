<template>
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in swiperImgs" :key="index">
      <img class="swiper-slide-img" :style="{height:height}" :src="item" :alt="index" />
    </swiper-slide>
    <!-- <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>-->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  // name: 'swiperArea',
  props: {
    height: {
      type: String,
      default: 'auto'
    },
    swiperImgs: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    },
    paginationTypes: {
      type: String,
      default: '1'
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          // 分页器对应的 html 元素
          el: '.swiper-pagination'
          // // 分页器的样式
          // type: 'bullets',
          // // 分页器内的元素，添加类名
          // bulletClass: 'custom-bullet-class'
        },
        autoplay: true,
        autoHeight: true
        // Some Swiper option/callback...
      }
    }
  },
  created () {
    this.initPaginnationLayout()
  },
  methods: {
    initPaginnationLayout () {
      switch (this.paginationTypes) {
        case '1':
          this.swiperOptions.pagination = { el: '.swiper-pagination' }
          break
        case '2':
          this.swiperOptions.pagination = { el: '.swiper-pagination', type: 'fraction' }
          break
      }
    }
  }
}
</script>
<style lang='scss' scoped>
// .swiper-slide-img{
// height: 100%;
// width: 100%;
// }
.swiper-slide-img{
  width: 100%;
}
.swiper-pagination-fraction{
  left:auto;
  right:0;
  width:auto;
  font-size: $infoSize;
  background-color: rgba(0,0,0,0.3);
  padding: px2rem(6) px2rem(18);
  border-top-left-radius: px2rem(16);
  border-bottom-left-radius: px2rem(16);
  bottom: px2rem(32);
  color: #fff;
  .swiper-pagination-current{
    font-size: $titleSize;
    font-weight: bold;
  }
}
</style>
