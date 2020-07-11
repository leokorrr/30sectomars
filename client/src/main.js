import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'

import AdminProductsList from './components/AdminProductsList';
import AdminsList from './components/AdminsList';
import Login from './components/Login';
import AdminLogin from './components/AdminLogin';
import Registration from './components/Registration';
import Homepage from './components/Homepage'
import Products from './components/products/Products';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Homepage},
  { path: '/login', component: Login},
  { path: '/admin-login', component: AdminLogin},
  { path: '/registration', component: Registration},
  { path: '/admin', component: AdminProductsList},
  { path: '/admins-list', component: AdminsList },
  { path: '/products/:productName', component: Products, name: 'products' }
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
