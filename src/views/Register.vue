<template>
    <div class="headDiv">
        <p class="h4 text-center mb-4">Sign in</p>
        <label class="grey-text">Your username</label>
        <input v-model="username" type="text" class="form-control"/>
        <br/>
        <label class="grey-text">Your email adress</label>
        <input v-model="email" type="email" class="form-control">
        <br/>
        <b-container class="passwords">
            <b-row>
                <b-col>
                    <label class="grey-text">Your password</label>
                    <input v-model="password" type="password" class="form-control"/>
                </b-col>
                <b-col>
                    <label class="grey-text">Password Confirmation</label>
                    <input v-model="confirmationPassword" type="password" class="form-control"/>
                </b-col>
            </b-row>
        </b-container>

        <div class="text-center mt-4">
            <b-button class="btn" @click="register" >Register</b-button>
        </div>
    </div>
</template>

<script>
    import AuthService from '../services/auth.service.js'
    export default {
        name: "Register",
        methods: {
            register() {
                let username = this.username;
                let email = this.email;
                let password = this.password;
                let confirmationPassword = this.confirmationPassword;
                if(password !== confirmationPassword) {
                    alert("Password and confirmation are not the same.")
                    return;
                }

                AuthService.registerWithRedirect(username, password, email, 'Login')
            }
        },
        data() {
            return {
                username: '',
                password: '',
                confirmationPassword: '',
                email: ''
            }
        }
    }
</script>

<style scoped>
    .headDiv {
        margin: 50px auto auto;
        width: 600px;
    }
    .passwords {
        padding: 0px;
    }
</style>