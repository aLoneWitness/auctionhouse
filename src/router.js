import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './views/Home.vue';
import Place from './views/Place.vue';
import Item from "./views/Item.vue";

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/place',
            name: 'Place',
            component: Place,
        },
        {
            path: '/item/:id',
            name: 'Item',
            component: Item,
            props: true
        }
    ]
})

export default router