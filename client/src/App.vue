<template>
  <div id="app">
      <!-- <admin-products-list></admin-products-list> -->
      <!-- <registration></registration> -->
      <router-view></router-view>
      <!-- <login></login> -->
  </div>
</template>

<script>
// import AdminProductsList from './components/AdminProductsList'
// import Registration from './components/Registration'
// import Login from './components/Login'

export default {
  name: 'App',
  components: {
      // 'admin-products-list': AdminProductsList,
      // registration: Registration,
      // login: Login
  },
  data() {
      return {
      }
  },
}
</script>

