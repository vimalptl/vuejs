import Vue from "vue";
import VueRouter from "vue-router";
import Category from "./components/Category.vue";
import FormGen from "./components/Form-Generator.vue";
import FormWiz from "./components/Wizard-Form.vue";

/*
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import FAQ from './components/FAQ.vue'
*/
import NotFound from "./components/Notfound.vue";

// Load on fly example
//const NotFound = () => System.import('./components/Notfound.vue')

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    /*    { path: '/home', name: "home",  component: Home},*/
    { path: "/fw", name: "wizard-form", component: FormWiz },

    { path: "/fg", name: "form-generator", component: FormGen },
    { path: "/", component: Category },
    { path: "*", name: "notfound", component: NotFound }
  ]
});

export default router;
