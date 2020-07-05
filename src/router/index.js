import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/my',
    name: 'my',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */'../views/My.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shopping.vue')
  },
  {
    path: '/goodslist',
    name: 'goodslist',
    component: () => import(/* webpackChunkName: "about" */ '../views/GoodList.vue')

  },
  {
    path: '/goodsdetail',
    name: 'goodsdetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/GoodsDetail.vue')

  },
  {
    path: '/buy',
    name: 'buy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buy.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')

  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
