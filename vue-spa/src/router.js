import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './components/Category.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import FAQ from './components/FAQ.vue'
import NotFound from './components/Notfound.vue'

// Load on fly example 
//const NotFound = () => System.import('./components/Notfound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode : 'history',
    routes: [
        { path: '/home', name: "home",  component: Home},
        { path: '/login', name: "login",  component: Login},
        { path: '/faq', name: "faq",  component: FAQ},        
        { path: '/', component: Category},
        { path: '*', name: "notfound", component: NotFound}
    ]
})

export default router