import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './components/Category.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import FAQ from './components/FAQ.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/home', name: "home",  component: Home},
        { path: '/login', name: "login",  component: Login},
        { path: '/faq', name: "faq",  component: FAQ},        
        { path: '/', component: Category}
    ]
})

export default router