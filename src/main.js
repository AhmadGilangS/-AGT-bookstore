import Vue from 'vue'
import App from './App.vue'
import './quasar'

import VueRouter from 'vue-router'
import routes from './router/routes';

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')



