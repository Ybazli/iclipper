import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Setting from '@/components/Setting'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },

    ]
})