import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Ad from '@/views/Ads/Ad'
import AdList from '@/views/Ads/AdList'
import NewAd from '@/views/Ads/NewAd'
import Login from '@/views/Auth/Login'
import Registration from '@/views/Auth/Registration'
import Orders from '@/views/User/Orders'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/ad/:id',
            name: 'ad',
            component: Ad
        },
        {
            path: '/list',
            name: 'list',
            component: AdList
        },
        {
            path: '/new',
            name: 'new',
            component: NewAd
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders
        }
    ],
    mode: 'history'
})
