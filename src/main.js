import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import AuthService from './services/auth.service';

Vue.use(Vuex);
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

axios.interceptors.response.use( (response) => {
  return response
}, (error => {

  if(error.response.status !== 401) {
    return new Promise((resolve, reject) => {
      reject(error)
    })


  }

  AuthService.logout();
  router.push("login");
}))



const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers['Authorization'] = token;
}

Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
