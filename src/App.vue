<template>
  <div id="app">
<!--    <b-navbar toggleable="lg" type="dark" variant="info">-->
<!--      <b-navbar-brand href="/">AuctionHouse</b-navbar-brand>-->
<!--      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->
<!--      <b-collapse id="nav-collapse" is-nav>-->
<!--        <b-navbar-nav>-->
<!--          <b-nav-item href="/">Home</b-nav-item>-->
<!--        </b-navbar-nav>-->
<!--        <b-navbar-nav class="ml-auto" v-if="isLoggedIn()">-->
<!--          <b-button href="/place">-->
<!--            Place Advertisement-->
<!--          </b-button>-->
<!--          <b-button @click="logout()">-->
<!--            Logout-->
<!--          </b-button>-->
<!--        </b-navbar-nav>-->
<!--      </b-collapse>-->
<!--    </b-navbar>-->
    <b-navbar toggleable="lg" type="dark" variant="info" id="navbar">
      <b-navbar-brand href="/">Auctionhouse</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form style="margin-right: 20px">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
            <img style="cursor: pointer" src="https://img.icons8.com/ios/24/000000/search--v1.png"/>
          </b-nav-form>

          <b-nav-item href="/place">
            <a id="placead">
              Place Advertisement
            </a>
          </b-nav-item>

          <b-nav-item-dropdown v-if="isLoggedIn()" right>
            <!-- Using 'button-content' slot -->

            <template v-slot:button-content>
              <em>Account</em>
            </template>
            <b-dropdown-item @click="redirect('/profile')">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-else>
              <em>Login</em>
          </b-nav-item>
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
      },
      redirect(direction) {
        this.$router.push(direction);
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
  #navbar {
    padding-left: 95mm;
    padding-right: 95mm;
  }
  #placead {
    color: black;
    font-weight: bold;
    border: 10px solid rgb(100, 181, 194);
    background-color: rgb(100, 181, 194);
    border-radius: 4px;
  }
</style>
