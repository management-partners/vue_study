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
import Directive from './Directive'
import Filter from './Filter&Mixins'
import Animation from './Animation'

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
        { path: '/directive', component: Directive },
        { path: '/filter', component: Filter },
        { path: '/animation', component: Animation },
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

// Directive folder
// global directive is do not use parameter
Vue.directive('high-light', {
    bind(el, bingding, vnode) {
        el.style.backgroundColor = bingding.value
    }
});
// global directive have to parameter
Vue.directive('high-light-parameter', {
    bind(el, bingding, vnode) {
        if (bingding.arg == 'background') {
            el.style.backgroundColor = bingding.value
        } else {
            el.style.backgroundColor = 'green'
        }
    }
});
// global directive have to parameter delayed
Vue.directive('high-light-parameter-delayed', {
    bind(el, bingding, vnode) {
        var delay = 0;
        if (bingding.modifiers['delayed']) {
            delay = 300;
        }
        setTimeout(() => {
            if (bingding.arg == 'background') {
                el.style.backgroundColor = bingding.value
            } else {
                el.style.backgroundColor = 'green'
            }
        }, delay);

    }
});
// global filter
Vue.filter('toUppercase', function(value) {
    return value.toUpperCase();
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})