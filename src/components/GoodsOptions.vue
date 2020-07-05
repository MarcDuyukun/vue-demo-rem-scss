<template>
  <div class="goods-options z-index-2">
    <ul class="goods-options-list">
      <li class="goods-options-list-item" v-for="(item,index) in optionsData" :key="index">
        <a @click="onOptionsItemClick(item,index)" class="goods-options-list-item-content">
          <span
            class="goods-options-list-item-content-name"
            :class="{'goods-options-list-item-content-name-active':selectOption.id ===item.id}"
          >{{item.name}}</span>
          <span
            class="goods-options-list-item-content-caret caret"
            :class="[isShowSubConent && selectOption.id ===item.id? 'goods-options-list-item-content-caret-open':'goods-options-list-item-content-caret-close']"
            v-if="item.subs.length>0"
          ></span>
        </a>
      </li>
    </ul>
    <transition name="fold-height">
      <div class="options-sub-content z-index-2" v-show="isShowSubConent">
        <ul class="options-sub-content-list">
          <li
            class="options-sub-content-list-item"
            v-for="(item,index) in selectOption.subs"
            :key="index"
          >
            <a
              @click="onSubOptionsItemClick(item,index)"
              class="options-sub-content-list-item-content"
            >
              <span
                class="options-sub-content-list-item-content-name"
                :class="{'options-sub-content-list-item-content-name-active':selectOption.id===item.id}"
              >{{item.name}}</span>
              <img
                class="options-sub-content-list-item-content-select"
                src="@imgs/options-select.svg"
                alt="select"
                v-show="selectOption.id===item.id"
              />
            </a>
          </li>
        </ul>
      </div>
    </transition>
    <!-- //遮盖层 -->
    <div class="cover" v-show="isShowSubConent" @click="isShowSubConent = false"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      optionsData: [
        {
          id: '1',
          name: '默认',
          subs: [
            {
              id: '1',
              name: '默认'
            },
            {
              id: '1-2',
              name: '价格由高到低'
            },
            {
              id: '1-3',
              name: '销量由高到低'
            }
          ]
        },
        {
          id: '2',
          name: '有货优先',
          subs: []
        },
        {
          id: '3',
          name: '直营优先',
          subs: []
        }
      ],
      selectOption: {},
      isShowSubConent: false
    }
  },
  methods: {
    onOptionsItemClick (item, index) {
      if (this.isShowSubConent) {
        this.isShowSubConent = false
        return
      }
      if (item.subs.length > 0 && item.id === this.selectOption.id) {
        this.isShowSubConent = true
      }
      this.selectOption = item
    },
    onSubOptionsItemClick (item, index) {
      this.selectOption = item
      this.optionsData.forEach(option => {
        option.subs.forEach(item => {
          if (item.id === this.selectOption.id) {
            option.id = item.id
            option.name = item.name
          }
        })
      })
      this.isShowSubConent = false
    }
  },
  watch: {
    selectOption (nval) {
      this.$emit('optionsChange', nval.id)
    }
  },
  created () {
    this.selectOption = this.optionsData[0]
  }
}
</script>
<style lang='scss' scoped>
.goods-options {
  width: 100%;
  border-bottom: px2rem(1) solid $lineColor;
  &-list {
    display: flex;
    width: 100%;
    height: px2rem(46);
    background-color: #fff;
    &-item {
      flex-grow: 1;
      &-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        &-name {
          font-size: $infoSize;
          margin-right: $marginSize;
          &-active {
            color: $mainColor;
          }
        }
        &-caret {
          &-open {
            transform: rotate(-180deg);
            transition: all 0.3s;
          }
          &-close {
            transform: rotate(0deg);
            transition: all 0.3s;
          }
        }
      }
    }
  }
  .options-sub-content {
    position: absolute;
    width: 100%;
    max-height: px2rem(180);
    overflow: hidden;
    overflow-y: auto;
    background-color: #fff;
    &-list {
      &-item {
        &-content {
          display: flex;
          align-items: center;
          border-top: px2rem(1) solid $lineColor;
          padding: $marginSize;
          height: px2rem(44);
          box-sizing: border-box;
          &-name {
            font-size: $infoSize;
            display: inline-block;
            flex-grow: 1;
            &-active {
              color: $mainColor;
            }
          }
          &-select {
            width: px2rem(18);
            height: px2rem(18);
          }
        }
      }
    }
  }
  .fold-height-enter-active{
      animation-duration: 0.3s;
      animation-name:fold-height-open;
  }
  @keyframes fold-height-open {
      0%{
          max-height: 0;
      }
      100%{
          max-height: px2rem(180);
      }
  }
  .fold-height-leave-active{
      animation-duration: 0.3s;
      animation-name:fold-height-close;
  }
  @keyframes fold-height-close {
      0%{
          max-height: px2rem(180);
      }
      100%{
          max-height: 0;
      }
  }
}
</style>
