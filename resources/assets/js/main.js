import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Example from './components/Example.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Example }
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
