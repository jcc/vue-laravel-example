import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router/dist/vue-router.common.js'
import App from './App.vue'

Vue.use(VueRouter)

import Example from './components/Example.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Example }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
