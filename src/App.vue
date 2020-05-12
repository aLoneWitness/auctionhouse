<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">AuctionHouse</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="isLoggedIn()">
          <b-button href="/place">
            Place Advertisement
          </b-button>
          <b-button @click="logout()">
            Logout
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import AuthService from './services/auth.service'
  export default {
    name: 'App',
    components: {
    },
    methods: {
      isLoggedIn() {
        return AuthService.isAuthenticated();
      },
      logout() {
        AuthService.logout();
      }
    }
  }
</script>

<style>
#app {
  font-family: "Lato Light", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
  .ml-auto > button {
    margin-left: 20px;
  }
</style>
