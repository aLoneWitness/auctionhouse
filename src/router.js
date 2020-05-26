import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './views/Home.vue';
import Place from './views/Place.vue';
import Item from "./views/Item.vue";
import Login from "./views/Login";
import User from "./views/User";
import Register from "./views/Register";

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: { requiresAuth: true }
        },
        {
            path: '/place',
            name: 'Place',
            component: Place,
            meta: { requiresAuth: true }
        },
        {
            path: '/item/:id',
            name: 'Item',
            component: Item,
            props: true,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/users/:username',
            name: 'User',
            component: User,
            meta: { requiresAuth: true }
        },
        {
            path: '/profile',
            name: 'My Profile',
            component: User,
            meta: { RequiresAuth: true }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        const loggedIn = localStorage.getItem('token');

        if (!loggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});

export default router