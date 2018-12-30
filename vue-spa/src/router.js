import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import FAQ from './components/FAQ.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/home', component: Home},
        { path: '/login', component: Login},
        { path: '/faq', component: FAQ},        
        { path: '/', component: Layout}
    ]
})

export default router