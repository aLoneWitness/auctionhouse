import Vue from 'vue';
import router from "../router";

class AuthService {

    // LOGIN METHOD WITHOUT RETURN VALUES
    login(username, password) {
        if(username === "" || password === "") return;
        Vue.prototype.$http
            .post("/login", {
                username: username,
                password: password
            })
            .then((response) => {
                if(response.status !== 200) return;
                localStorage.setItem('token', response.headers.authorization)
                Vue.prototype.$http.defaults.headers['Authorization'] = response.headers.authorization;
                return;
            })

    }

    // LOGIN WITH REDIRECTION AFTER LOGIN
    loginWithRedirect(username, password, redirect) {
        if(username === "" || password === "") return;
        Vue.prototype.$http
            .post("/login", {
                username: username,
                password: password
            })
            .then((response) => {
                if(response.status !== 200) return;
                console.log(response.headers)
                localStorage.setItem('token', response.headers.authorization)
                localStorage.setItem('username', username)
                Vue.prototype.$http.defaults.headers['Authorization'] = response.headers.authorization;
                console.log(redirect)
                if(typeof redirect === 'undefined' || redirect === null || redirect === ''){
                    router.push('/')
                }
                else {
                    router.push(redirect)
                }
                return;
            })
    }

    register(username, password, email) {
        if(username === "" || password === "" || email === "") return false;
        Vue.prototype.$http
            .post("/register", {
                username: username,
                password: password,
                email: email
            }).then((response) => {
                return response.status === 200;
        })
    }

    registerWithRedirect(username, password, email, redirect) {
        if(username === "" || password === "" || email === "") return false;
        Vue.prototype.$http
            .post("/register", {
                username: username,
                password: password,
                email: email
            }).then((response) => {
                if(redirect === ''){
                    router.push('/')
                }
                else {
                    router.push(redirect)
                }
                return response.status === 200;
        })
    }

    logout() {
        localStorage.setItem('token', '')
        localStorage.setItem('username', '')
        Vue.prototype.$http.defaults.headers['Authorization'] = '';
        location.reload()
    }

    getUsername() {
        return localStorage.getItem('username');
    }

    isAuthenticated() {
        return localStorage.getItem('token') !== '';
    }
}

export default new AuthService();