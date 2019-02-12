import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Layout from './layouts/Layout.vue';
import Buefy from 'buefy';

Vue.use(Buefy);
Vue.component('default-layout', Layout);

Vue.config.productionTip = false


require("./assets/main.scss")


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
