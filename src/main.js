// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import api from './api/index.js'
import pagedata from './api/data.js'
import { Button, Loading, Carousel, CarouselItem} from 'element-ui';
import router from './router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Loading)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.prototype.$pagedata = pagedata;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});