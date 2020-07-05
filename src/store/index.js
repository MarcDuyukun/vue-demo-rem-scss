import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingDatas: []
  },
  mutations: {
    addShoppingData: (state, goods) => {
      // 判断添加的商品是否也存在购物车
      const isExist = state.shoppingDatas.some(item => {
        if (item.id === goods.id) {
          item.number += 1
          return true
        }
      })
      if (!isExist) {
        Vue.set(goods, 'isCheck', false)
        Vue.set(goods, 'number', 1)
        state.shoppingDatas.push(goods)
      }
    },
    changeShoppingDataNumber: (state, data) => {
      state.shoppingDatas[data.index].number = data.number
    }
  },
  actions: {
  },
  modules: {
  }
})
