import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/f_index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {  //个人中心
      path: '/mine',
      name: 'mine',
      component: () => import('./views/f_mine.vue')
    },
    {  //分类
      path: '/classify',
      name: 'classify',
      component: () => import('./views/f_classify.vue')
    },
    {  //购物车
      path: '/shopCart',
      name: 'shopCart',
      component: () => import('./views/f_shopCart.vue')
    }
  ]
})
