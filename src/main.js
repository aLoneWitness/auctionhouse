import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

import VueRouter from "vue-router";
Vue.use(VueRouter);

import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers = {
  'Content-Type': 'application/json'
};
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
