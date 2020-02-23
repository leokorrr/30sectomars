import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'

import AdminProductsList from './components/AdminProductsList';
import Login from './components/Login';
import Registration from './components/Registration';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AdminProductsList},
  { path: '/login', component: Login},
  { path: '/registration', component: Registration},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
