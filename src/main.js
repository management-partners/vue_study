import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'


import Communication from './Communication/Communication'
import Home from './Home'
import Quote from './Slot/Quote'
import Dynamic from './DynmicComponent/Dynamic'
import QuoteProccess from './Quote/index'

Vue.use(VueRouter)

import jQuery from 'jquery'
window.jQuery = jQuery
window.$ = jQuery

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/communication', component: Communication },
    { path: '/quote', component: Quote },
    { path: '/dynamic', component: Dynamic },
    { path: '/quotes', component: QuoteProccess },
  ],
  mode: 'history'
})

window.events = new Vue();
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('editChangeAge', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
