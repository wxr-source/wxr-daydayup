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
    component: () => import(/* webpackChunkName: "storeDetail" */ '../views/qrcodejs2.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
