<template>
    <div>
        <p class="h4 text-center mb-4">Sign in</p>
        <label class="grey-text">Your username</label>
        <input v-model="username" type="text" class="form-control"/>
        <br/>
        <label class="grey-text">Your password</label>
        <input v-model="password" type="password" class="form-control"/>
        <div class="text-center mt-4">
            <b-button class="btn" @click="login" >Login</b-button>
        </div>
        <a @click="$router.push('Register')">I don't have an account...</a>
    </div>
</template>

<script>
    import AuthService from '../services/auth.service.js'
    export default {
        name: "Login",
        methods: {
            login() {
                let username = this.username;
                let password = this.password;

                AuthService.loginWithRedirect(username, password, this.$route.query.redirect)
            },
        },
        data() {
            return {
                username: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    div {
        margin: 50px auto auto;
        width: 600px;
    }
    a {
        cursor: pointer;
    }
</style>