import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '../components/page/product.vue'
import team from '../components/page/team.vue'
import cose from '../components/page/cose.vue'
import about from '../components/page/about.vue'
import detail from '../components/page/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/cose',
      name: 'cose',
      component: cose
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
