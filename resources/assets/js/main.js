import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
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

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
