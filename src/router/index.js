import Vue from 'vue'
import VueRouter from 'vue-router'


// const originalPush = VueRouter.prototype.push
// 避免重复点击同一个路由报错
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: () => import(/* webpackChunkName: "storeDetail" */ '../views/home.vue')
    // component: () => import(/* webpackChunkName: "storeDetail" */ '../views/scrolltest.vue')
    // component: () => import(/* webpackChunkName: "storeDetail" */ '../views/slideVerify.vue')
    // component: () => import(/* webpackChunkName: "storeDetail" */ '../views/betterscrolltest.vue')
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/qrcodejs2.vue')
  },
  {
    path: '/message',
    name: '消息中心',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/message.vue')
  },
  {
    path: '/my',
    name: '我的',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/my.vue')
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/cart.vue')
  },
  {
    path: '/storeDetail',
    name: '商品详情',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/storeDetail.vue')
  },
  {
    path: '/scrolltest',
    name: '滚动条样式修改实验',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/scrolltest.vue')
  },
  {
    path: '/login',
    name: '登录页面',
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/login.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
