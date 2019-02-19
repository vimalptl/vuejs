import Vue from "vue";
import VueRouter from "vue-router";
import FormWiz from "./components/Wizard-Form.vue";
import Test from "./components/TestForm.vue";

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
    { path: "/fw", name: "wizard-form", component: FormWiz },
    { path: "/test", name: "testform", component: Test },
    { path: "/", name: "wizard-form", component: FormWiz },
    { path: "*", name: "notfound", component: NotFound }
  ]
});

export default router;
