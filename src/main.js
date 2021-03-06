// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import Router from 'vue-router'
import store from './store/'
import * as filters from './filters'
import './assets/fonts/iconfont.css'
import './assets/scss/style.scss'
Vue.config.productionTip = false
Vue.use(Router)

Object.keys(filters).forEach(k => { Vue.filter(k, filters[k]) }) // 注册过滤器
window.router = new Router({
    routes,
    // mode: 'history',
    // mode: 'hash',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        else if (to.hash) {
            return { selector: to.hash }
        }
        else {
            return { x: 0, y: 0 }
        }
    },
    linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    document.title = to.name
    next()
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
